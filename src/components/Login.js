import { withAuthenticator, Authenticator, SignIn, SignUp, SignOut, Greetings, NavBar } from 'aws-amplify-react';
import React, { Component } from 'react';
import { Alert } from 'reactstrap';
import './NavMenu.css';

var globalState = ''
export class Login extends React.Component {
    constructor() {
        super();
        this.state = { authState: 'signIn' };
    }

    render() {
        return (<Authenticator hideDefault={true} authState='signIn'> 
            <SignIn />
            <SignUp />
            <Greetings />
        </Authenticator>
        );
    }
}
