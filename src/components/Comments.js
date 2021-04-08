import Comment from "./Comment";
import React, {useState} from "react";
// Hello World
const Comments = ({comments}) => {

    const [searchText, setSearchText] = useState('')
    const [isShow, setIsShow] = useState('none')
    const [commentList, setCommentList] = useState(comments)

    const filteredComments = commentList.filter((comment) => {
        return comment.user.includes(searchText);
    })

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

    function handleCommentsToggle () {
        setIsShow((isShow) => !isShow)
    }
     
    function handleSearch (event) {
        setSearchText(event.target.value) 
    }

    function handleDelete (id) {
        const newComments = commentList.filter((comment) => { 
            return comment.id !== id})
        setCommentList(newComments)
    }

    return(
        <>
        <div className="button">
            <button className="comments-toggle" onClick={handleCommentsToggle}>{isShow ? "Hide" : "Show" } Comments</button>
        </div>

        <input onChange={handleSearch} type="text" placeholder="Search" />

        <div className="comments" style={{ display: isShow ? "block" : "none" }}>
            <h3>{comments.length} Comments</h3>
            {commentItems}
        </div>
        </>
    )
}

export default Comments;