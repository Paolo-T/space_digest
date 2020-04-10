import React from "react";
import ReactPlayer from "react-player";

function VideoFeatured({ url, width, height }) {
    return (
        <ReactPlayer
            url={url}
            playing
            controls={true}
            muted={true}
            width={width}
            height={height}
        />
    );
}

export default VideoFeatured;
