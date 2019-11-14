import React from 'react'
import {connect} from 'react-redux'
import {fetchChampions} from '../../actions'
import Search from '../Search.js'

class championList extends React.Component {
    componentDidMount(){
        this.props.fetchChampions()
    };

    renderList(){
        let champions
        if(this.props.error){
            return <div><h4>{this.props.error.status}: {this.props.error.statusText}</h4></div>
        }
        this.props.search.length > 0 ? champions = this.props.search : champions = this.props.champions    
        return champions.map(c => {
            return (
                <div key={c.name}>
                    <h3>Champion: {c.name}</h3>
                    <p>Key: {c.key}</p>
                    <p>Title: {c.title}</p>
                </div>
            )
        })
    };

    render(){
        return (
            <div>
                <Search champion={this.props.champions} />
                {this.renderList()}
            </div>
        )
    };
};

const mapStateToProps = state => {
    console.log(state)
    return {
        champions: Object.values(state.championList),
        search: Object.values(state.search),
        error: state.error
    }
}

export default connect(mapStateToProps, {fetchChampions})(championList)

//export const SearchChampContext = React.createContext(this.props.champions)