import Comment from "./Comment";
import React, {useState} from "react";

const Comments = ({comments}) => {

    const [searchText, setSearchText] = useState('')

    const filteredComments = comments.filter((comment) => {
        return comment.user.includes(searchText);
    })

    const [currentState, setState] = useState('none')
    function handleCommentsToggle () {
        setState((currentState) => !currentState)
    }

    const commentItems = filteredComments.map((comment) => {
        return (
            <Comment 
            key={comment.id}
            id={comment.id}
            user={comment.user}
            comment={comment.comment}
            onDelete={handleDelete}
            />
        )
    })

    const [commentList, setCommentList] = useState(commentItems)
    function handleDelete (id) {
        console.log(id)
        const newComments = commentList.filter((comment) => { 
            console.log(comment)
            return comment.id !== id})
        console.log(newComments)
        setCommentList(newComments)
    }
    console.log(commentList)
    function handleSearch (event) {
        setSearchText(event.target.value) 
    }

    return(
        <>
        <div className="button">
            <button className="comments-toggle" onClick={handleCommentsToggle}>{currentState ? "Hide" : "Show" } Comments</button>
        </div>
        <input onChange={handleSearch} type="text" placeholder="Search" />

        <div className="comments" style={{ display: currentState ? "block" : "none" }}>
            <h3>{comments.length} Comments</h3>
            {commentItems}
        </div>
        </>
    )
}

export default Comments;