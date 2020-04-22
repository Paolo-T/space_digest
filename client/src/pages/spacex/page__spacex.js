import React from "react";
import SpacexPatches from "../../components/SpacexPatches";
import spacex_logo from "../../img/spacex_logo.svg";

function Page__spacex() {
    return (
        <div className="container mx-auto pt-24">
            <div className="mb-12">
                <div className="md:w-9/12 mx-auto text-center">
                    <h1 className="mb-3">SpaceX</h1>
                    <p className="md:w-3/4 mx-auto">
                        SpaceX designs, manufactures and launches advanced
                        rockets and spacecraft. The company was founded in 2002
                        to revolutionize space technology, with the ultimate
                        goal of enabling people to live on other planets.
                    </p>
                    <p className="inline-block pt-4 mr-10">
                        HQ: Hawthorne - California
                    </p>
                    <p className="inline-block py-1 ">Address: Rocket Road</p>
                </div>
            </div>
            <img
                className="md:w-9/12 mx-auto bg-gray-200 mt-10 md:mt-12 md:mb-32 mb-16 py-16 pl-8 md:py-48 md:pr-20 md:pl-32"
                src={spacex_logo}
                alt="Mars Rover"
            />

            <h2 className="container md:w-9/12 w-40 mx-auto bg-teal-300 mb-10 md:mb-20">
                Mission Patches
            </h2>

            <SpacexPatches />
        </div>
    );
}

export default Page__spacex;
