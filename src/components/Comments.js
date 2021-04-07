import Comment from "./Comment";
import React, {useState} from "react";

const Comments = ({comments}) => {
    // debugger
    const commentArray = comments
    console.log(comments)
    const commentItems = commentArray.map((comment) => {
        return (
            <Comment 
            key={comment.id}
            user={comment.user}
            comment={comment.comment}
            />
        )
    }) 
    const [currentState, setState] = useState('none')

    function handleCommentsToggle () {
        setState((currentState) => !currentState)
    }

    return(
        <>
        <div className="button">
            <button className="comments-toggle" onClick={handleCommentsToggle}>{currentState ? "Hide" : "Show" } Comments</button>
        </div>
        <div className="comments" style={{ display: currentState ? "block" : "none" }}>
            <h3>{commentArray.length} Comments</h3>
            {commentItems}
        </div>
        </>
    )
}

export default Comments;