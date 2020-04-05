import React from "react";
import ReactPlayer from "react-player";

function VideoFeatured({ url }) {
    return (
        <div className="container mx-auto h-60">
            <ReactPlayer
                className="container mx-auto h-56"
                url={url}
                playing
                controls={true}
                muted={true}
                width="1280px"
                height="720px"
            />
        </div>
    );
}

export default VideoFeatured;
