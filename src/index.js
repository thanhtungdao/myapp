import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import { Authenticator } from 'aws-amplify-react';
Amplify.configure(awsconfig);
const rootElement = document.getElementById('root');

ReactDOM.render(
    <Authenticator hideDefault={true}>
        <BrowserRouter>
        <App />
    </BrowserRouter>
    </Authenticator>,
    rootElement);

serviceWorker.unregister();