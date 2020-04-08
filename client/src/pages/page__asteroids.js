import React from "react";
import Asteroids from "../components/Asteroids";

function page__asteroids() {
    return (
        <div className="container mx-auto pr-30 pt-12 mb-24 text-left">
            <div className="w-9/12 mx-auto">
                <h1>Asteroids</h1>
                <Asteroids />
            </div>
        </div>
    );
}

export default page__asteroids;
