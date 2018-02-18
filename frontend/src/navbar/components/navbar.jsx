import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { logout } from '../../user/actions/user_actions';
import {openModal} from '../../modal/actions/modal_actions'
import UserForm from '../../user/components/user_form';
import '../scss/navbar.css'

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: (modalContent) => dispatch(openModal(modalContent)) 

});


class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout(e) {
    e.preventDefault()
    this.props.logout()
    window.location.reload()
  }


  render() {
    if(this.props.currentUser) {
      return (
        <nav className='navbar'>
          <a className='navbar-logo'>Duber-Happiness</a>
            <ul>
              <li><Link to="/"></Link></li>
              <li><Link to="/" onClick={this.logout}>Logout</Link></li>
            </ul>
        </nav>
       )
     } else {
       return (
         <nav className='navbar'>
           <a className='navbar-logo'>Duber-Happiness</a>
             <ul>
               <li><div onClick={() => this.props.openModal(<UserForm formType="login"/>)} >Login</div></li>
               <li><div onClick={() => this.props.openModal(<UserForm formType="signup"/>)} >Sign Up!</div></li>
             </ul>
         </nav>
       )
     }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
