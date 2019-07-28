import React, {Component} from 'react'
import {connect} from 'react-redux'
import {handleLogin} from '../../redux/actions/shared'
import logo from '../../imgs/react-redux.svg'
import history from '../../history'
import M from 'materialize-css';

class SignIn extends Component {
    componentDidMount(){
        M.AutoInit();
    }
    login = () => {
        if (this.selectElement.value === "0") {
            alert('plz sellect')
        } else {
            this
                .props
                .dispatch(handleLogin())
                history.push(`${this.props.location.state.from.pathname}`)

        }
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12 m3"></div>

                    <div className="col s12 m6">
                        <div className="card ">
                            <div className="card-content ">
                                <span className="card-title center">welcome to would you rather app</span>
                            </div>
                            <div className="card-image">
                                <img src={logo} alt="logo"/>
                            </div>
                            <div className="card-action">
                                <select ref={select => this.selectElement = select} defaultValue="0">
                                    <option value="0" disabled>Select a user</option>
                                    {Object
                                        .keys(this.props.users)
                                        .map(key => (
                                            <option key={this.props.users[key].id} value={this.props.users[key].id}>{this.props.users[key].name}</option>
                                        ))}
                                </select>
                            </div>
                            <button onClick={this.login} className="waves-effect waves-light btn center">SignIn</button>

                        </div>
                    </div>

                    <div className="col s12 m3"></div>
                </div>
            </div>
        )
    }
}

export default connect(state => ({users: state.users}))(SignIn)