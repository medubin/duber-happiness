import React from 'react';  
import {connect} from 'react-redux';  
import {pushState} from 'redux-router-dom';


  
/**
 * Higher-order component (HOC) to wrap restricted pages
 */
/**
 * work in progress
 */
export function requireAuthentication(Component) {
    class AuthenticatedComponent extends React.Component {
        componentWillMount() {
            this.checkAuth()
        }
      
        componentWillReceiveProps(nextProps) {
            this.checkAuth()
        }

        checkAuth() {
            if (!this.props.isLoggedIn) {
                let redirectAfterLogin = this.props.location.pathname
                this.props.dispatch(pushState(null, `/login?next=${redirectAfterLogin}`))
            }
        }

        render() {
            return (
              <div>
                {this.props.isAuthenticated === true
                  ? <Component {...this.props}/>
                  : null
                }
              </div>
            )
        }
    }
    const mapStateToProps = ({ user }) => ({
        isLoggedIn: Boolean(user.currentUser)
      });

 return connect(mapStateToProps)(AuthenticatedComponent)
}
