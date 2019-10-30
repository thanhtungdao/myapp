import React, { Component } from 'react';
import './Home.css'
import { VideoBackground } from './VideoPlayer';
import { Link } from 'react-router-dom';
import { withAuthenticator, Authenticator, SignIn, SignUp, SignOut, Greetings, NavBar } from 'aws-amplify-react';

export class Home extends React.Component {
    render() {
        return (<div>
            <VideoBackground class='video-background' videoSrc='https://cloud2019-video.s3-ap-southeast-2.amazonaws.com/tokyo2020.mp4' />
            <div align="center" className="introduction">
                <h1>Tokyo 2020 Streaming Service</h1>
                <h4>Enjoy the heat of live live events</h4>
                <h4>Don't miss out any of the previous matches</h4>
                <Link to="/register">
                    <button className="myBtn">SIGN UP NOW</button>
                </Link>
            </div>
        </div>
        );
    }
}