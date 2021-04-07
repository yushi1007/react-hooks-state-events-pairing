import { useState } from "react"



const Votes = ({upvotes, downvotes}) => {

    const [upvote, setUpvotes] = useState(upvotes)
    const [downvote, setDownvotes] = useState(downvotes)

    function handleUpvote() {
        setUpvotes((upvote) => upvote + 1)
    }
    function handleDownvote() {
        setDownvotes((downvote) => downvote + 1)
    }
    return(
        <>
        <button onClick={handleUpvote} className="upvotes">{upvote}👍</button> <button onClick={handleDownvote} className="downvotes">{downvote}👎</button>
        </>
    )
}

export default Votes;