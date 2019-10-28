import React, { Component } from 'react';

class LogIn extends Component {
    render() {
        return (
            <div className="ui middle aligned center aligned grid">
                <div className="column">
                    <h2 className="ui teal image header">Summoner Name</h2>
                    <form className="ui large form">
                        <div className="ui stacked segment">
                            <div className="ui right labeled input">
                                <input type="text" placeholder="Find domain" />
                                <div className="ui dropdown label">
                                    <div className="text">.com</div>
                                    <i className="dropdown icon"></i>
                                    <div className="menu">
                                        <div className="item">.com</div>
                                        <div className="item">.net</div>
                                        <div className="item">.org</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default LogIn;