import React,{Component} from 'react'
import {Link} from 'react-router-dom'

class Header extends Component{
    render(){
        return(
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">New Question</Link>
                    </li>
                    <li>
                        <Link to="/">Leader Board</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Header