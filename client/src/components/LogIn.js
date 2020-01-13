import React, { Component } from 'react'
import './LogIn.css'
import { Query, ApolloConsumer } from 'react-apollo'
import { getSummonerQuery, getRegions } from '../queries/queries'
import history from '../history'

class LogIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      summomerName: '',
      region: '',
    }
  }

  displayRegions = () => {
    return (
      <Query query={getRegions}>
        {({ loading, error, data }) => {
          if (loading) return <option disabled>Loading regions</option>
          if (error) return <option disabled>error</option>

          return data.regions.map(region => {
            return (
              <option value={region} key={region}>
                {region}
              </option>
            )
          })
        }}
      </Query>
    )
  }

  logIn(data) {
    localStorage.setItem('region', this.state.region)
    localStorage.setItem('summonerId', data.summoner.id)
    history.push('/live-game')
  }

  render() {
    return (
      <ApolloConsumer>
        {client => (
          <div className="container has-text-centered">
            <div className="columns">
              <form
                className="field login-field"
                onSubmit={async e => {
                  e.preventDefault()
                  const { data } = await client.query({
                    query: getSummonerQuery,
                    variables: {
                      name: this.state.summomerName,
                      region: this.state.region,
                    },
                  })
                  this.logIn(data)
                }}>
                <h3 className="title is-3 ">Summoner Name</h3>

                <div className="field has-addons">
                  <div className="">
                    <input
                      className="input is-primary"
                      name="summonerName"
                      type="text"
                      value={this.state.summomerName}
                      onChange={e =>
                        this.setState({
                          summomerName: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="select is-primary">
                    <select
                      value={this.state.region}
                      onChange={e =>
                        this.setState({
                          region: e.target.value,
                        })
                      }>
                      {this.displayRegions()}
                    </select>
                  </div>
                </div>
                <div className="field">
                  <div>
                    <button type="submit" className="button is-primary">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}
      </ApolloConsumer>
    )
  }
}

export default LogIn
