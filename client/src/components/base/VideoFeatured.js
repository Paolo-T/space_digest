import React from "react";
import ReactPlayer from "react-player";

function VideoFeatured({ url, width, height }) {
    return (
        <div className="container">
            <ReactPlayer
                className="container"
                url={url}
                playing
                controls={true}
                muted={true}
                width={width}
                height={height}
            />
        </div>
    );
}

export default VideoFeatured;
