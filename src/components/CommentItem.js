import React, { useState } from "react"

const CommentItem = ({ user, comment, onDelete, id }) => {

    const [likes, setLikes] = useState(0)
    const [dislikes, setDislikes] = useState(0)

    const handleLikes = () => {
        setLikes(likes => likes + 1)
    }
    const handleDislikes = () => {
        setDislikes(dislikes => dislikes + 1)
    }

    return (
        <div className="comment">
            <h3>{user}</h3>
            <p>{comment}</p>
            <button onClick={handleLikes}>{likes}👍</button><button onClick={handleDislikes}>{dislikes}👎</button>
            <button onClick={() => onDelete(id)} className="delete-btn"><i class="fas fa-trash-alt"></i></button>
        </div>
            )
}

export default CommentItem;