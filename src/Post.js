import { Avatar } from '@material-ui/core';
import React from 'react';
import './Post.css';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import NearMeOutlinedIcon from '@material-ui/icons/NearMeOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Post({ profilesrc, image, username, timestamp, message }) {
    return (
        <div className="Post">

            <div className="Post_Top">
                <Avatar src={profilesrc} className="Post_Avatar" />

                <div className="Post_Topinfo">
                    <h3>{username}</h3>
                    <p>{timestamp}</p>
                </div>

            </div>

            <div className="Post_Bottom">
                <p>{message}</p>
            </div>

            <div className="Post_image">
                <img src={image} alt="" />
            </div>

            <div className="Post_Option">
                <div className="Option">
                    <ThumbUpOutlinedIcon />
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
