import React, { useEffect, useState } from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import NewPost from './NewPost';
import Post from './Post';
import db from './Firebase';

function Feed() {

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
        <div className="Feed">
            <StoryReel />
            <NewPost />
            {posts && posts.map((post) => {
                return (<Post
                    key={post.id}
                    profilesrc={post.data.profilesrc}
                    image={post.data.image}
                    message={post.data.message}
                    username={post.data.username}
                    timestamp={post.data.timestamp}
                />)
            })}
        </div>
    )
}

export default Feed;
