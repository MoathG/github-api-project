import React, { Component } from 'react';

export default class Input extends Component {

    submitHandler = (e) => {
        e.preventDefault()
        const searchTerm = e.target.children[0].value;
        this.props.getRepos(searchTerm);
    }

    render() {
        return (
            <div>
                <form onSubmit = {this.submitHandler}>
                    <input type = 'text' placeholder = 'Enter UserName'></input>
                    <button>Search</button>
                </form>
            </div>
        )
    }
}
