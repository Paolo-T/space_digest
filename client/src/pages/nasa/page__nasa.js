import React from "react";
import SimpleReactLightbox from "simple-react-lightbox";
import RoverPhotos from "../../components/RoverPhotos";
import MarsWeather from "../../components/MarsWeather";
import nasa_logo from "../../img/nasa_logo.svg";

function page__marsRover() {
    return (
        <div className="container mx-auto pt-24">
            <div className="mb-12">
                <div className="md:w-9/12 mx-auto text-center">
                    <h1 className="mb-3">NASA</h1>
                    <h3 className="md:w-3/5 mx-auto md:leading-tight mb-1">
                        The National Aeronautics and Space Administration (NASA)
                        is an independent agency of the United States Federal
                        Government responsible for the civilian space program,
                        as well as aeronautics and aerospace research.
                    </h3>
                </div>

                <img
                    className="w-full md:w-9/12 mx-auto bg-gray-200 mt-10 sm:mt-12 mb-16 md:mb-20 rounded-md py-10 px-10 md:py-20 md:px-20"
                    src={nasa_logo}
                    alt="Mars Rover"
                />
            </div>

            <div className="container md:w-9/12 mx-auto mb-10 md:mt-20">
                {/* <MarsWeather /> */}

                <div className="rounded-md mt-20">
                    <div className="mb-10 text-left">
                        <h2 className="md:w-3/5 line-block flex-1 mb-8 bg-teal-300">
                            Shots from Curiosity Mars rover (Mast camera)
                        </h2>
                        <p className="md:w-4/5 mb-12">
                            NeoWs (Near Earth Object Web Service) is a web
                            service for near earth Asteroid information. With
                            NeoWs we can display Asteroids based on their
                            closest approach date to Earth.
                        </p>
                    </div>

                    <SimpleReactLightbox>
                        <RoverPhotos />
                    </SimpleReactLightbox>
                </div>
            </div>
        </div>
    );
}

export default page__marsRover;
