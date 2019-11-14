import React, { Component } from 'react';
//import { Field, reduxForm } from 'redux-form';
//import { connect } from 'react-redux';
import { logIn } from '../../actions/lolApi';

class LogIn extends Component {
    renderField = ({ input, type, meta: { touched, error } }) => {
        const className = `inline field ${error && touched ? 'error' : ''}`;
        return (
            <div className={className}>
                {touched &&
                    (error && (
                        <div className='ui right pointing red basic label'>
                            {error}
                        </div>
                    ))}
                <input
                    {...input}
                    placeholder='Please add summoner name'
                    type={type}
                />
            </div>
        );
    };

    onSubmit = formValues => {
        console.log(formValues);
        this.props.logIn(formValues);
    };

    render() {
        return (
            <div className='ui middle aligned center aligned grid'>
                <div className='column'>
                    <h2 className='ui teal image header'>Summoner Name</h2>
                    <form
                        className='ui large form'
                        onSubmit={this.props.handleSubmit(this.onSubmit)}
                    >
                        <div className='ui stacked segment'>
                            <div className='ui labeled input'>
                                <Field
                                    name='summonerName'
                                    type='text'
                                    component={this.renderField}
                                />
                                <div>
                                    <button
                                        type='submit'
                                        className='ui primary button'
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

/*
const validate = formValues => {
    const error = {};
    if (!formValues.summonerName) {
        error.summonerName = 'Required';
    }
    return error;
};

LogIn = reduxForm({
    form: 'logIn',
    validate
})(LogIn);

export default connect(
    null,
    { logIn }
)(LogIn);
*/
