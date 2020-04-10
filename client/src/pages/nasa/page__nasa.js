import React from "react";
import SimpleReactLightbox from "simple-react-lightbox";
import RoverPhotos from "../../components/RoverPhotos";
import curiosityRover from "../../img/curiosityRover.jpg";
import MarsWeather from "../../components/MarsWeather";
import nasa_logo from "../../img/nasa_logo.svg";

function page__marsRover() {
    return (
        <div className="container mx-auto pt-12">
            <div className="mb-12">
                <div className="md:w-9/12 mx-auto">
                    <h1 className="">NASA</h1>
                    <p className="md:w-3/4 block">
                        The National Aeronautics and Space Administration (NASA)
                        is an independent agency of the United States Federal
                        Government responsible for the civilian space program,
                        as well as aeronautics and aerospace research.
                    </p>
                </div>
                <img
                    className="w-full md:w-9/12 mx-auto bg-gray-200 mt-10 sm:mt-12 mb-16 md:mb-32 md:py-12 md:px-12"
                    src={nasa_logo}
                    alt="Mars Rover"
                />
                <div className="md:w-9/12 mx-auto relative md:pt-20">
                    <h2 className="md:w-56 bg-teal-300 md:absolute -left-8 -top-2 mb-8 md:mb-0">
                        ____Mars Rover
                    </h2>

                    <p className="w-full md:w-3/4 block">
                        Spirit and Opportunity landed on Mars January 3 and
                        January 24, 2004 PST (Jan. 4 and Jan. 25 UTC). Both
                        rovers lived well beyond their planned 90-day missions.
                        Opportunity worked nearly 15 years on Mars and broke the
                        driving record for putting the most miles on the
                        odometer. The twin geologists, Spirit and Opportunity,
                        have both found dramatic evidence that:
                    </p>
                    <p className="md:w-3/4 block mt-6">
                        Long ago Mars was wetter Conditions at Mars could have
                        sustained microbial life, if any existed With data from
                        the rovers, mission scientists have reconstructed an
                        ancient past when Mars was awash in water. Spirit and
                        Opportunity each found evidence for past wet conditions
                        that possibly could have supported microbial life.
                    </p>
                </div>

                <img
                    className="md:w-9/12 mx-auto my-10 md:my-16"
                    src={curiosityRover}
                    alt="Mars Rover"
                />
            </div>

            <div className="mb-10 mt-20">
                <div className="md:w-9/12 mx-auto">
                    <MarsWeather />
                    <h2 className="md:w-2/3 line-block flex-1 ">
                        Shots from Curiosity Mars rover (Mast camera)
                    </h2>
                    <p className="md:w-4/5 text-2xl font-light">
                        NeoWs (Near Earth Object Web Service) is a web service
                        for near earth Asteroid information. With NeoWs we can
                        display Asteroids based on their closest approach date
                        to Earth.
                    </p>
                </div>
                <div className="flex pr-30 mb-10 mt-16 text-left">
                    <div className="w-9/12 mx-auto pt-6">
                        {/* <SimpleReactLightbox>
                            <RoverPhotos />
                        </SimpleReactLightbox> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default page__marsRover;
