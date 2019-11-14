import React, { Component } from 'react'
import {connect} from 'react-redux'
import {searchChampion} from '../actions'
class Search extends Component {
    constructor(props){
        super(props)
        this.state = {value: ''}
    }
    renderSelectList(){
        return this.props.champion.map(c => {
            return (
                <option value={c.id} key={c.key}>{c.id}</option>
            )
        })
    }

    onChange = (event) => {
        console.log(event.target.value)
        this.props.searchChampion(event.target.value)
    }

    render() {
        console.log(this.state.value)
        return (
            <div >
                <select className="ui search dropdown" value={this.state.value} onChange={this.onChange}>
                    {this.renderSelectList()}
                </select>
            </div>
        )
    }
}

export default connect(null,  {searchChampion})(Search)
