import React, { Component } from 'react';
import { Query, ApolloConsumer } from 'react-apollo';
import { getSummonerQuery, getRegions } from '../queries/queries';

class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            summomerName: '',
            region: ''
        };
    }

    displayRegions = () => {
        return (
            <Query query={getRegions}>
                {({ loading, error, data }) => {
                    if (loading)
                        return <option disabled>Loading regions</option>;
                    if (error) return <div></div>;

                    return data.regions.map(region => {
                        return (
                            <option value={region} key={region}>
                                {region}
                            </option>
                        );
                    });
                }}
            </Query>
        );
    };

    onSubmit = event => {
        event.preventDefault();
        this.props.getSummonerQuery.variables = {
            name: this.state.summomerName,
            region: this.state.region
        };
    };

    render() {
        return (
            <ApolloConsumer>
                {client => (
                    <div className='ui stackable centered page grid'>
                        <div className=''>
                            <h2 className='ui teal image header'>
                                Summoner Name
                            </h2>
                            <form
                                className='ui form'
                                onSubmit={e => {
                                    e.preventDefault();
                                    client.query({
                                        query: getSummonerQuery,
                                        variables: {
                                            name: this.state.summomerName,
                                            region: this.state.region
                                        }
                                    });
                                }}
                            >
                                <div className='two fields'>
                                    <div className='twelve wide field'>
                                        <input
                                            name='summonerName'
                                            type='text'
                                            value={this.state.summomerName}
                                            onChange={e =>
                                                this.setState({
                                                    summomerName: e.target.value
                                                })
                                            }
                                        />
                                    </div>
                                    <div className='five wide field'>
                                        <select
                                            className='ui search dropdown'
                                            value={this.state.region}
                                            onChange={e =>
                                                this.setState({
                                                    region: e.target.value
                                                })
                                            }
                                        >
                                            {this.displayRegions()}
                                        </select>
                                    </div>
                                </div>
                                <div className='field'>
                                    <div>
                                        <button
                                            type='submit'
                                            className='ui primary button'
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </ApolloConsumer>
        );
    }
}

export default LogIn;
