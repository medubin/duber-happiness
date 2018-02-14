import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { logout } from '../../user/actions/user_actions';
import '../scss/navbar.css'

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
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
          <a className='navbar-logo'>Dubster</a>
            <ul>
              <li><Link to="/"></Link></li>
              <li><Link to="/login" onClick={this.logout}>Logout</Link></li>
            </ul>
        </nav>
       )
     } else {
       return (
         <nav className='navbar'>
           <a className='navbar-logo'>Dubster</a>
             <ul>
               <li><Link to="/login">Login</Link></li>
               <li><Link to="/signup">Sign up!</Link></li>
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
