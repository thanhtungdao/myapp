import React, { Component } from 'react';

export class VideoPlayer extends React.Component {
    render(){
        return (
            <div className="video-player" >
                <video className={this.props.class} height="480" width="100%"
                controls
                autoPlay
                    src={this.props.videoSrc} />
            </div>
        );
    }
}

export class VideoBackground extends React.Component {
    render() {
        return (
            <div className="video-background">
                <video className={this.props.class}
                loop
                muted
                autoPlay
                    src={this.props.videoSrc} />
            </div>
        );
    }
}

