import React from "react";
import Asteroids from "../components/Asteroids";

function page__asteroids() {
    return (
        <div className="container mx-auto pr-30 pt-12 mb-24 text-left">
            <div className="w-9/12 mx-auto">
                <h1>Asteroids</h1>
                <h2 className="w-2/3 inline-block flex-1 ">
                    Passing close to Earth this month
                </h2>
                <p className="w-4/5 text-2xl font-light">
                    NeoWs (Near Earth Object Web Service) is a web service for
                    near earth Asteroid information. With NeoWs we can display
                    Asteroids based on their closest approach date to Earth.
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

                <Asteroids />
            </div>
        </div>
    );
}

export default page__asteroids;
