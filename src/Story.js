import { Avatar } from '@material-ui/core';
import React from 'react';
import './Story.css';

function Story({ image , profilesrc , title }) {
    return (
        <div style={{backgroundImage: `url(${image})`}} className="Story">
            <Avatar src={profilesrc} className="Story_Avatar"/>
            <h4>{title}</h4>
        </div>
    )
}

export default Story;