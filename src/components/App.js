import video from "../data/video.js";
import Comments from "./Comments.js";
import Video from "./Video.js";
import Votes from "./Votes.js";

function App() {
  return (
    <div className="App">
     <Video embedUrl={video.embedUrl} title={video.title} views={video.views} createdAt={video.createdAt}/>
     <Votes upvotes={video.upvotes} downvotes={video.downvotes}/>
     <Comments comments={video.comments}/>
    </div>
  );
}

export default App;
