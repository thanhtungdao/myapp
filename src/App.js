import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import VideoOnDemand from './components/VideoOnDemand';
import Livestream from './components/Livestream';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator, Authenticator, SignUp, SignIn } from 'aws-amplify-react';
import { Login } from './components/Login';
import { Register } from './components/Register';
import './custom.css'


Amplify.configure(awsconfig);

export default class App extends Component {
  static displayName = App.name;
  render() {
    return (<Layout>
        <Route exact path='/' component={Home} />
        <Route path='/video-on-demand' component={VideoOnDemand} />
        <Route path='/livestream' component={Livestream} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register}/>
      </Layout>
    );
  }
}
