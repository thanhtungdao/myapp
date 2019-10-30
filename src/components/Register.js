import { withAuthenticator, Authenticator, SignIn, SignUp, SignOut, Greetings, NavBar } from 'aws-amplify-react';
import React, { Component } from 'react';
import './NavMenu.css';

var globalState = ''
export class Register extends React.Component {
    constructor() {
        super();
        this.state = { authState: 'signUp' };
    }

    render() {
        return (<Authenticator hideDefault={true} authState='signUp'> 
            <SignUp />
            <SignIn />
            <Greetings />
        </Authenticator>
        );
    }
}