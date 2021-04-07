
const Comment = ({ user, comment }) => {
    return (
        <div className="user-comment">
            <h4>{user}</h4>
            <p>{comment}</p>
        </div>
    )
}

export default Comment;