import React, { useState } from 'react';
import { Avatar } from '@material-ui/core';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import { InsertEmoticon } from '@material-ui/icons';
import PeopleIcon from '@material-ui/icons/People';
import './NewPost.css';
import { useStatevalue } from './StateProvider';
import db from './Firebase';
import firebase from 'firebase';

function NewPost() {

    const [{ user }, dispatch] = useStatevalue("");
    const [input, setInput] = useState("");
    const [image, setImage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection("posts").add({
            profilesrc: user.photoURL,
            image: image,
            message: input,
            username: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })

        setInput("");
        setImage("");
    }

    return (
        <div className="NewPost">
            <div className="NewPost_Top">
                <Avatar src={user.photoURL} />
                <form>
                    <input className="msg" value={input} type="text" placeholder={`What's on your mind, ${user.displayName}?`} onChange={(e) => setInput(e.target.value)} />
                    <input className="img" value={image} type="text" placeholder="Enter Image URL (optional)" onChange={(e) => setImage(e.target.value)} />
                    <button onClick={handleSubmit} type="submit">
                        Button
                    </button>
                </form>
            </div>
            <div className="NewPost_Bottom">
                <div className="NewPost_option">
                    <PhotoLibraryIcon style={{ color: "Green" }} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="NewPost_option">
                    <PeopleIcon style={{ color: "Blue" }} />
                    <h3>Tag Friends</h3>
                </div>
                <div className="NewPost_option">
                    <InsertEmoticon style={{ color: "Orange" }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default NewPost;