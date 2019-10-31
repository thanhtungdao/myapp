import React, { Component } from 'react';
import './Livestream.css';
import { withAuthenticator } from 'aws-amplify-react';

class Livestream extends React.Component {

    render() {
        return (
            <div align="center" className="liveVideoDiv">
                <h1>Live Now</h1>
                <video className="liveVideo" controls autoPlay>
                    <source src="https://814bffb9b389f652.mediapackage.ap-southeast-2.amazonaws.com/out/v1/894973225f96405fa49c72eeac6814a9/index.m3u8" type="application/x-mpegURL" />
                </video>
            </div>
        );
    }
}
export default withAuthenticator(Livestream);
