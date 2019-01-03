import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ProfileContainer extends Component {
    constructor(){
        super()
        this.state = {
            title: '',
        };
    }

    render() {
        return (
            <div>
                <h1> Nian Liu Profile </h1>
                <form id='article-form'>
                </form>
            </div>
        )
    }
}

export default ProfileContainer; 