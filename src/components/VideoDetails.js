import React, { useState } from "react"

const VideoDetail = ({ title, views, createdAt, upvotes, downvotes}) => {
    
    const [likes, setLikes] = useState(upvotes)
    const [dislikes, setDislikes] = useState(downvotes)

    const handleLikes = () => {
        setLikes(likes => likes + 1)
    }
    const handleDislikes = () => {
        setDislikes(dislikes => dislikes + 1)
    }
    return (
<div className="video-details">
        <h2>{title}</h2>
        <p>{views} Views | Uploaded {createdAt} </p>
    <div className="votes-btn">
        <button onClick={handleLikes}>{likes}👍</button><button onClick={handleDislikes}>{dislikes}👎</button>
    </div>
</div>
    )
}

export default VideoDetail;