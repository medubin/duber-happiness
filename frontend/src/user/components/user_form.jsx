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
	login: (user) => dispatch(login(user)),
	signup: (user) => dispatch(signup(user)),
	closeModal: () => dispatch(closeModal)

});


class UserForm extends Form {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
			passwordCheck: "",
			errors: [],
			formType: this.props.formType
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
		if (this.state.formType === "signup") {
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
		if (this.state.formType === "signup" && this.state.password !== this.state.passwordCheck) {
			errors.push("Passwords don't match.");
		}

		this.setState({errors: errors});

		return errors.length !== 0;
	}

	
	navLink() {
		if (this.state.formType === "login") {
			return <div onClick={() => this.setState({formType: 'signup'})} >sign up instead</div>
		} else {
			return <div onClick={() => this.setState({formType: 'login'})} >log in instead</div>
		}
	}

  generateFields() {
    let fields = [
      {name: 'Username', description: 'Username', type: 'text', state: 'username'},
      {name: 'Password', description: 'Password', type: 'password', state: 'password'}
    ]
    if (this.state.formType === 'signup') {
      fields.push({name: 'Password', description: 'Retype password', type: 'password', state: 'passwordCheck'})
    }
    return fields
  }

	render() {
		return (
			<div className="form-container">
        Welcome to Dubster!
        <br/>
        Please {this.state.formType} or {this.navLink()}
        {this.renderForm()}
			</div>
		);
	}

}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(UserForm));
