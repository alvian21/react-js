import React from 'react';
import './YouTubeComp.css';

const YouTubeComp = (props)=>{
    return (
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="https://i.ytimg.com/vi/GBvnzRwoizo/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBku2WagLeluCqOYSIbxdFNGkStow" alt=""/>
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">Desc here</p>
        </div>
    )
}

YouTubeComp.defaultProps = {
    time:'00.00',
    title:"no title"
}

export default YouTubeComp; 