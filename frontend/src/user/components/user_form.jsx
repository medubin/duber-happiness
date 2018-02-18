import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { login, signup } from '../actions/user_actions';
import Form from '../../common/components/form'
import {closeModal} from '../../modal/actions/modal_actions'

const mapStateToProps = ({ user }) => ({
  loggedIn: Boolean(user.currentUser),
  errors: user.errors
});

const mapDispatchToProps = (dispatch) => ({
	// const formType = location.pathname.slice(1);
	// const formType = 'login';
	// const processForm = (formType === 'login') ? login : signup;
	
	login: (user) => dispatch(login(user)),
	signup: (user) => dispatch(signup(user)),
	closeModal: () => dispatch(closeModal)

  // return {
    // processForm: user => dispatch(processForm(user)),
    // formType
  // };
});


class UserForm extends Form {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
			passwordCheck: "",
			errors: []
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		this.redirectIfLoggedIn();
	}

	componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.history.push("/");
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.loggedIn) {
			this.props.closeModal();
		}
	}

	handleSubmit(e) {
		e.preventDefault();
		if (this.handleFrontEndErrors()) {
			return;
		}
		const user = this.state;
		if (this.props.formType === "signup") {
			this.props.signup({user});
		} else {
			this.props.login({user});
		}
	}

	handleFrontEndErrors() {
		let errors = [];
		if (this.state.password.length < 6) {
			errors.push("The Password must be at least 6 characters long.");
		}
		if (this.props.formType === "signup" && this.state.password !== this.state.passwordCheck) {
			errors.push("Passwords don't match.");
		}

		this.setState({errors: errors});

		return errors.length !== 0;
	}

	navLink() {
		if (this.props.formType === "login") {
			return <Link to="/signup">sign up instead</Link>;
		} else {
			return <Link to="/login">log in instead</Link>;
		}
	}

  generateFields() {
    let fields = [
      {name: 'Username', description: 'Username', type: 'text', state: 'username'},
      {name: 'Password', description: 'Password', type: 'password', state: 'password'}
    ]
    if (this.props.formType === 'signup') {
      fields.push({name: 'Password', description: 'Retype password', type: 'password', state: 'passwordCheck'})
    }
    return fields
  }

	render() {
		return (
			<div className="form-container">
        Welcome to Dubster!
        <br/>
        Please {this.props.formType} or {this.navLink()}
        {this.renderForm()}
			</div>
		);
	}

}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(UserForm));
