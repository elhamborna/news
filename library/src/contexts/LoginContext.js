import React, { Component , createContext} from 'react';
export const loginContext = createContext();
class LoginContextProvider extends Component {
    state = {
        login: false
    }
     changelogin = () => {
         this.setState (
             {
                 login : ! this.state.login
             }
         )
     }
    render() { 
        return (
            <loginContext.Provider value={{...this.state ,changelogin: this.changelogin}}>
                {this.props.children}
            </loginContext.Provider>
        )
    }
}
 
export default LoginContextProvider;
