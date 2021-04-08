import { useState } from "react";

const Comment = ({ id, user, comment, onDelete }) => {

    const [upvote, setUpvotes] = useState(0)
    const [downvote, setDownvotes] = useState(0)
    function handleUpvote() {
        setUpvotes((upvote) => upvote + 1)
    }
    function handleDownvote() {
        setDownvotes((downvote) => downvote + 1)
    }


    return (
        <div className="user-comment">
            <h4>{user}</h4>
            <p>{comment}</p>
            <button onClick={handleUpvote} className="upvotes">{upvote}👍</button> <button onClick={handleDownvote} className="downvotes">{downvote}👎</button> <button onClick={() => onDelete(id)} className="delete">🗑</button>
        </div>
    )
}


export default Comment;