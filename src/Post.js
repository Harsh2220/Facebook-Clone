import { Avatar } from '@material-ui/core';
import React from 'react';
import './Post.css';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import NearMeOutlinedIcon from '@material-ui/icons/NearMeOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { ThumbUp } from '@material-ui/icons';

function Post({ profilesrc, image, username, timestamp, message }) {

    const change = () => {
        const like = document.getElementById("like");
        like.style.color = "#2e81f4";
    }

    const time = new Date(timestamp?.toDate()).toUTCString();

    return (
        <div className="Post">

            <div className="Post_Top">
                <Avatar src={profilesrc} className="Post_Avatar" />

                <div className="Post_Topinfo">
                    <h3>{username}</h3>
                    <p>{time}</p>
                </div>

            </div>

            <div className="Post_Bottom">
                <p>{message}</p>
            </div>

            <div className="Post_image">
                <img src={image} alt="" />
            </div>

            <div className="Post_Option">
                <div className="Option" onClick={change}>
                    <ThumbUp id="like" className="gray"/>
                    <p>Like</p>
                </div>
                <div className="Option">
                    <ChatBubbleOutlineOutlinedIcon />
                    <p>Comment</p>
                </div>
                <div className="Option">
                    <NearMeOutlinedIcon />
                    <p>Share</p>
                </div>
                <div className="Option">
                    <AccountCircleIcon />
                    <ExpandMoreIcon />
                </div>
            </div>
        </div>
    )
}

export default Post;
