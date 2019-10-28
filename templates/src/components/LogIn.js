import React, { Component } from 'react';

class LogIn extends Component {
    render() {
        return (
            <div className="ui middle aligned center aligned grid">
                <div className="column">
                    <h2 className="ui teal image header">Summoner Name</h2>
                    <form className="ui large form">
                        <div className="ui stacked segment">
                            <div className="ui labeled input">
                                <input type="text" placeholder="Summoner name..." />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default LogIn;