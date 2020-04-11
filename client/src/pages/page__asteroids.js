import React from "react";
import Asteroids from "../components/Asteroids";
import asteroid from "../img/asteroid.jpg";

function page__asteroids() {
    return (
        <div className="container mx-auto pt-12">
            <div className="mb-12">
                <div className="md:w-9/12 mx-auto">
                    <h1 className="">Asteroids</h1>

                    <p className="w-4/5 text-2xl font-light">
                        NeoWs (Near Earth Object Web Service) is a web service
                        for near earth Asteroid information. With NeoWs we can
                        display Asteroids based on their closest approach date
                        to Earth.
                        <span className="block pt-10">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://cneos.jpl.nasa.gov/"
                            >
                                CNEOS - Center for Near Earth Object Studies
                            </a>
                        </span>
                    </p>
                    <img
                        className="w-full bg-gray-200 mt-10 sm:mt-12 mb-16 md:mb-32"
                        src={asteroid}
                        alt="Mars Rover"
                    />

                    <Asteroids />
                </div>
            </div>
        </div>
    );
}

export default page__asteroids;
