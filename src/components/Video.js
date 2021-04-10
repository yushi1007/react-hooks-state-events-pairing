import React from "react";

const Video = ({title, embedUrl, views, createdAt}) => {
    // const {title, embedUrl, views, createdAt} = video
    // debugger
    return (
        <>
            <iframe
        width="919"
        height="525"
        src={embedUrl}
        frameBorder="0"
        title={title}
            />
        <h1>{title}</h1>
        <p>{views} Views | Uploaded {createdAt}</p>
        </>
    )
}

export default Video;