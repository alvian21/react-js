import React, { Component, Fragment } from 'react';
import YouTubeComp from '../../../component/YoutubeComp/YouTubeComp';

class YoutubeCompPage extends Component {
    render() {
        return (
            <Fragment>
                <p>Youtube Component</p>
                <hr />
                <YouTubeComp time="7.12" title="Youtube 1" />
                <YouTubeComp time="8.02" title="Youtube 2" />
                <YouTubeComp time="5.04" title="Youtube 3" />
                <YouTubeComp time="4.12" title="Youtube 4" />
                <YouTubeComp />
            </Fragment>
        )
    }
}

export default YoutubeCompPage;