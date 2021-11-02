import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';


class BookList extends Component {
    static contextType = ThemeContext;
    render() { 
        const { isLight , light , dark} = this.context;
        const theme = isLight ? light : dark;
        return (
           <div className="Book-list"  style={{background:theme.bg , color: theme.text }}>
                <ul>
                    <li style={{background:theme.item}}> چشم ها</li>
                    <li style={{background:theme.item}}> فرزندان</li>
                    <li style={{background:theme.item}}>خواص گیاهان</li>
                </ul>
            </div> 
        )
    }
}
 
export default BookList;