import React, { useState } from 'react';
import { Avatar } from '@material-ui/core';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import { InsertEmoticon } from '@material-ui/icons';
import PeopleIcon from '@material-ui/icons/People';
import './NewPost.css';

function NewPost() {

    const [input,setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        setInput("");
    }

    return (
        <div className="NewPost">
            <div className="NewPost_Top">
                <Avatar src="https://scontent.famd1-3.fna.fbcdn.net/v/t1.6435-1/cp0/p86x86/94193782_228612315058057_8158821850890108928_n.jpg?_nc_cat=100&amp;ccb=1-3&amp;_nc_sid=dbb9e7&amp;_nc_ohc=cWs_RnwSgDYAX88U2FY&amp;_nc_ht=scontent.famd1-3.fna&amp;tp=27&amp;oh=a3907fc45533bc9106d34715800dc8f8&amp;oe=60969247"/>
                <form>
                <input value={input} type="text" placeholder="What's on your mind, Harsh? " onChange={(e) => setInput(e.target.value)}/>

                <button onClick={handleSubmit} type="submit">
                    button
                </button>
                </form>
            </div>
            <div className="NewPost_Bottom">
                <div className="NewPost_option">
                    <PhotoLibraryIcon style={{color: "Green"}}/>
                    <h3>Photo/Video</h3>
                </div>
                <div className="NewPost_option">
                    <PeopleIcon style={{color: "Blue"}}/>
                    <h3>Tag Friends</h3>
                </div>
                <div className="NewPost_option">
                    <InsertEmoticon style={{color: "Orange"}}/>
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default NewPost;