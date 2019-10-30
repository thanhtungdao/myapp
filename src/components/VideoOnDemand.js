import React, { Component } from 'react';
import { VideoPlayer } from './VideoPlayer';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import { withAuthenticator } from 'aws-amplify-react';

var VIDEOS = {
    unisa: 'https://cloud2019-video.s3-ap-southeast-2.amazonaws.com/UniSA.mp4',
    paralympics: 'https://cloud2019-video.s3-ap-southeast-2.amazonaws.com/trailer2020.mp4',
    intro: 'https://cloud2019-video.s3-ap-southeast-2.amazonaws.com/tokyo2020.mp4'
};

class VideoOnDemand extends React.Component {

    constructor() {
        super();
        this.state = {
            src: VIDEOS.unisa,
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        var text = e.target.value;
        this.setState({
            src: VIDEOS[text]
        })
    }
    render() {
        return (
            <div>
                <VideoPlayer videoSrc={this.state.src} />
                <Menu handleClick={this.handleClick} />
            </div>
        );
    }

}

export default withAuthenticator(VideoOnDemand);

export class Menu extends React.Component {
    constructor(props) {
        super(props);
    }
    handleClick(e) {
    }
    render() {
        return (
            <div>
                <h3>Select Video</h3>
                <CardDeck>
                    <Card border="primary">
                        <Card.Img variant="top" src="https://cloud2019-video.s3-ap-southeast-2.amazonaws.com/tokyo2020.png" />
                        <Card.Body>
                            <Card.Title>
                                <Button variant="link" className="stretched-link" value="paralympics" onClick={(e) => this.props.handleClick(e, "value")}>Tokyo Paralympics 2020</Button>
                                <small className="text-muted"></small>
                            </Card.Title>
                        </Card.Body>
                    </Card>
                    <Card border="primary">
                        <Card.Img variant="top" src="https://cloud2019-video.s3-ap-southeast-2.amazonaws.com/concept.jpg" />
                        <Card.Body>
                            <Card.Title>
                                <Button variant="link" className="stretched-link" value="intro" onClick={(e) => this.props.handleClick(e, "value")}>Tokyo Olympics Intro 2020</Button>
                                <small className="text-muted"></small>
                            </Card.Title>
                        </Card.Body>
                    </Card> <Card border="primary">
                        <Card.Img variant="top" src="https://cloud2019-video.s3-ap-southeast-2.amazonaws.com/unisaPic.jpg" />
                        <Card.Body>
                            <Card.Title>
                                <Button variant="link" className="stretched-link" value="unisa" onClick={(e) => this.props.handleClick(e, "value")}>UniSA Video</Button>
                                <small className="text-muted"></small>
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </CardDeck>
                <br />
                <span className="font-italic">Cloud Assignment 2019</span>
            </div>
        );
    }
}