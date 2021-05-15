import { React, useState, useEffect } from 'react';
import './Contacts.css';
import ContactsName from './ContactsName';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import SearchIcon from '@material-ui/icons/Search';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import IconButton from '@material-ui/core/IconButton';
import db from './Firebase';

function Contacts() {

    const [posts, setPosts] = useState("");

    useEffect(() => {
        db.collection("posts").orderBy("timestamp", "desc")
            .onSnapshot(snapshot => {
                setPosts(snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data()
                })))
            })
    }, [])

    return (
        <div className="Contacts">

            <div className="Contacts_Top">
                <h3>Contacts</h3>

                <div className="Contacts_Option">
                    <IconButton>
                        <VideoCallIcon />
                    </IconButton>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <IconButton>
                        <MoreHorizIcon />
                    </IconButton>
                </div>
            </div>

            <div className="Contacts_Bottom">
                {posts && posts.map((post) => {
                    return (<ContactsName
                        key={post.id}
                        src={post.data.profilesrc}
                        name={post.data.username}
                    />)
                })}
            </div>

        </div>
    )
}

export default Contacts;
