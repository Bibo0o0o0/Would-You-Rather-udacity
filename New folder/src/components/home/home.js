import React, {Component} from 'react'
import {connect} from 'react-redux'
import M from 'materialize-css'

class Home extends Component {
    componentDidMount() {
        M.AutoInit();
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s3"></div>

                    <div className="col s6">
                        <ul className="tabs tabs-fixed-width tab-demo z-depth-1 marg-top">
                            <li className="tab tab-tittle">
                                <a href="#test1">Unanwsered Question</a>
                            </li>
                            <li className="tab tab-tittle">
                                <a className="active" href="#test2">anwsered Question</a>
                            </li>
                        </ul>

                        <div id="test1" className="col s12">

                            <div className="container-all">
                                <div className="container-header">
                                    <p>{this.props.users['sarahedo'].name}
                                        asks :</p>
                                </div>
                                <div className="container-data flex-container">
                                    <div className="container-img">
                                        <img src={`${this.props.users['sarahedo'].avatarURL}`} alt="logo"/>
                                    </div>
                                    <div className="SubContainer-data">
                                        <p>Would you rather</p>
                                        <small>Front end developer</small>
                                        <button className="btn waves-effect waves-light">view Poll</button>

                                    </div>
                                </div>
                            </div>

                        </div>

                        <div id="test2" className="col s12">

                            <div className="container-all">
                                <div className="container-header">
                                    <p>{this.props.users['sarahedo'].name}
                                        asks :</p>
                                </div>
                                <div className="container-data flex-container">
                                    <div className="container-img">
                                        <img src={`${this.props.users['sarahedo'].avatarURL}`} alt="logo"/>
                                    </div>
                                    <div className="SubContainer-data">
                                        <p>Would you rather</p>
                                        <small>Front end developer</small>
                                        <button className="btn waves-effect waves-light">view Poll</button>

                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="col s3"></div>
                </div>
            </div>
        )
    }
}

export default connect(state => ({users: state.users}))(Home)