import React from 'react'
import {connect} from 'react-redux'
import {fetchChampions} from '../../actions'

class championList extends React.Component {
    componentDidMount(){
        this.props.fetchChampions()
    };

    renderList(){
        if(this.props.error){
            return <div><h4>{this.props.error.status}: {this.props.error.statusText}</h4></div>
        }
        return this.props.champions.map(c => {
            return (
                <div key={c.key}>
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
                {this.renderList()}
            </div>
        )
    };
};

const mapStateToProps = state => {
    return {
        champions: Object.values(state.championList),
        error: state.error
    }
}

export default connect(mapStateToProps, {fetchChampions})(championList)