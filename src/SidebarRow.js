import React from 'react';
import { Avatar } from '@material-ui/core';
import './SidebarRow.css';

function SidebarRow({ src , title }) {
    return (
        <div className="SidebarRow">
            <Avatar src={src}/>
            <h4>{title}</h4>
        </div>
    );
}

export default SidebarRow;
