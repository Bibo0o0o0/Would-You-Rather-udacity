import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import M from 'materialize-css';

class Header extends Component {
    componentDidMount(){
        M.AutoInit();
    }
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper container">
                        <ul id="nav-mobile" className=" hide-on-med-and-down">
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
                </nav>
            </div>
        )
    }
}

export default Header