import video from "../data/video.js";
import Comments from "./Comments.js";
import Video from "./Video.js";
import Votes from "./Votes.js";

function App() {
  return (
    <div className="App">
        <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameborder="0"
        allowfullscreen
        title="Thinking in React"
      />
    </div>
  );
}

export default App;
