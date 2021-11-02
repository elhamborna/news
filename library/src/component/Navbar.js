import React, { Component } from 'react';
import { loginContext } from '../contexts/LoginContext';
import { ThemeContext } from '../contexts/ThemeContext';

class Navbar extends Component {
    static contextType = ThemeContext;
    render() {
        
        return (
            <loginContext.Consumer>
                {
                    (loginContext) =>(

                        <ThemeContext.Consumer> 
                        {
                        (context) => {
                            const { isLight , light , dark} = context;
                            const theme = isLight ? light : dark;
                            const {login , changelogin} = loginContext;
        
                            return(
                                <nav className='nav'  style={{background:theme.item , color: theme.text }}>
                                    <div onClick={changelogin}>
                                        {login ?   "شما وارد شدید"   :  "لطفا وارد شوید"  }
                                    </div>
                                <h1>
                                    <ul>
                                        <li> خانه</li>
                                        <li> درباره ما</li>
                                        <li>تماس با ما</li>
                                    </ul>
                                </h1>
                            </nav>
        
                            )

                    }}
                   
                    </ThemeContext.Consumer>

                    )
                }

            </loginContext.Consumer>

        );
    }
}
 
export default Navbar;