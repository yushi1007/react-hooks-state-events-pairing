import Comment from "./Comment";
import React, {useState} from "react";

const Comments = ({comments}) => {

    const [searchText, setSearchText] = useState('')
    const [displayNone, setDisplay] = useState('none')
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

    function handleSortToggle () {
        const sortingComments = [...commentList].sort((a, b) => a.user.localeCompare(b.user))
        setCommentList(sortingComments)
    }

    function handleCommentsToggle () {
        setDisplay((displayNone) => !displayNone)
    }
    
    function handleDelete (id) {
        const newComments = commentList.filter((comment) => comment.id !== id)
        setCommentList([...newComments])
    }
    
    function handleSearch (event) {
        setSearchText(event.target.value) 
    }

    return(
        <>
        <div className="button">
            <button className="comments-toggle" onClick={handleCommentsToggle}>{displayNone ? "Hide" : "Show" } Comments</button>
            <button className="comments-sort" onClick={handleSortToggle}>Sort Comments By Users</button>
        </div>
        <input onChange={handleSearch} type="text" placeholder="Search by user..." />

        <div className="comments" style={{ display: displayNone ? "block" : "none" }}>
            <h3>{comments.length} Comments</h3>
            {commentItems}
        </div>
        </>
    )
}

export default Comments;