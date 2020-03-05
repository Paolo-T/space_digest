import React from "react";
import Media from "./Media";
import MarsWeather from "./MarsWeather";
import RoverPhotos from "./RoverPhotos";
import Slider from "./Slider";

function MainContent() {
    return (
        <div>
            <Media />
            <MarsWeather />
            <RoverPhotos />
            {/* <Slider /> */}
        </div>
    );
}

export default MainContent;
