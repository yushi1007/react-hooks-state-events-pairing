import Comment from "./Comment";

const Comments = (comments) => {
    // debugger
    const commentArray = comments.comments
    const commentItems = commentArray.map((comment) => {
        return (
            <Comment 
            key={comment.id}
            user={comment.user}
            comment={comment.comment}
            />
        )
    }) 

    return(
        <div className="comments">
            <h3>{commentArray.length} Comments</h3>
            {commentItems}
        </div>
    )
}

export default Comments;