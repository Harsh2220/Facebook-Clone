import React from 'react';
import './ContactsName.css'
import { Avatar } from '@material-ui/core';

function ContactsName({ src , name }) {
    return (
        <div className="ContactsName">
            <Avatar src={src}/>
            <h3>{name}</h3>
        </div>
    )
}

export default ContactsName;
