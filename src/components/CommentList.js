import React, { useState } from "react"
import CommentItem from "./CommentItem";

const CommentList = ({comments}) => {

    const [isShow, setIsShow] = useState(true)
    const [search, setSearch] = useState("")
    const [commentList, setCommentList] = useState(comments)

    const filteredComments = commentList.filter((comment) => {
        return comment.user.toLowerCase().includes(search.toLowerCase());
    });

    const handleDelete = (id) => {
        setCommentList(commentList.filter((comment) => comment.id !== id));
      }

    const commentItems = filteredComments.map((comment) => (
            <CommentItem
            id={comment.id} 
            key={comment.id}
            user={comment.user}
            comment={comment.comment}
            onDelete={handleDelete}
            />        
    ));

    const handleSort = () => {
        const sortingComments = [...commentList].sort((a, b) => a.user.localeCompare(b.user))
        setCommentList(sortingComments)
    }

    const handleClick = () => {
        setIsShow(isShow => !isShow)
    }

    const handleSearch = (event) => {
        setSearch(event.target.value)
    }

    return (
    <>
        <button onClick={handleClick} className="hide-btn">{isShow ? "Hide" : "Show"} Comments</button>
        <button className="comments-sort" onClick={handleSort} value="user">Sort Comments By Users</button>
            <hr/>
        <input
        type="text"
        placeholder="Search..."
        onChange={handleSearch}
      />
        {
        isShow 
            ? 
        (  
        <div className="video-comments">
            <h3>{comments.length} Comments</h3>
            {commentItems}
        </div>
        ) 
        : 
        null
        } 
    </>
           );
    }

export default CommentList;