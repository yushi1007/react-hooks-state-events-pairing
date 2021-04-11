import React from 'react';
import VideoDetail from './VideoDetails';
import video from '../data/video';
import CommentList from './CommentList';


function App() {
  return (
    <div className="App">
        <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameborder="0"
        allowfullscreen
        title={video.title}
      />
      <VideoDetail 
      title={video.title} 
      views={video.views}  
      createdAt={video.createdAt}
      upvotes={video.upvotes}
      downvotes={video.downvotes}
      /><br></br>
      <CommentList comments={video.comments}/>
    </div>
  );
}

export default App;
