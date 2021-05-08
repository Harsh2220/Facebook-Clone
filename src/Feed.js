import React from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import NewPost from './NewPost';
import Post from './Post';

function Feed() {
    return (
        <div className="Feed">
            <StoryReel />
            <NewPost />
            <Post
                profilesrc="https://scontent.famd1-3.fna.fbcdn.net/v/t1.6435-1/cp0/p86x86/94193782_228612315058057_8158821850890108928_n.jpg?_nc_cat=100&amp;ccb=1-3&amp;_nc_sid=dbb9e7&amp;_nc_ohc=cWs_RnwSgDYAX88U2FY&amp;_nc_ht=scontent.famd1-3.fna&amp;tp=27&amp;oh=a3907fc45533bc9106d34715800dc8f8&amp;oe=60969247"
                image="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGZvbGlvfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                timestamp="2 Hours Ago"
                message="Hello"
                username="Harsh" />
            <Post
                profilesrc="https://scontent.famd1-3.fna.fbcdn.net/v/t1.6435-1/cp0/p86x86/94193782_228612315058057_8158821850890108928_n.jpg?_nc_cat=100&amp;ccb=1-3&amp;_nc_sid=dbb9e7&amp;_nc_ohc=cWs_RnwSgDYAX88U2FY&amp;_nc_ht=scontent.famd1-3.fna&amp;tp=27&amp;oh=a3907fc45533bc9106d34715800dc8f8&amp;oe=60969247"
                timestamp="time"
                message="Hy"
                username="Harsh" />
        </div>
    )
}

export default Feed;
