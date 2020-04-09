import React, { useContext } from "react";
import spaceXLaunch from "../../img/spaceXLaunch.jpg";
import SpacexPatches from "../../components/SpacexPatches";
import spacex_logo from "../../img/spacex_logo.svg";

function Page__spacex() {
    return (
        <div className="container mx-auto pt-12">
            <div className="mb-12">
                <div className="w-9/12 mx-auto max-auto">
                    <h1 className="">SpaceX</h1>
                    <p className="p w-3/4 block">
                        SpaceX designs, manufactures and launches advanced
                        rockets and spacecraft. The company was founded in 2002
                        to revolutionize space technology, with the ultimate
                        goal of enabling people to live on other planets.
                    </p>
                    <p className="p inline-block pt-4 mr-10">
                        HQ: Hawthorne - California
                    </p>
                    <p className="p inline-block py-1 ">Address: Rocket Road</p>
                </div>
                <img
                    className="w-9/12 mx-auto bg-gray-200 mt-12 mb-32 py-48 pr-20 pl-32"
                    src={spacex_logo}
                    alt="Mars Rover"
                />

                {/* <img
                    className="container mx-auto mb-16"
                    src={spaceXLaunch}
                    alt="Moon Landing"
                /> */}

                <div className="">
                    <h2 className="w-56 bg-teal-300 mb-20">
                        ____Mission Patches
                    </h2>
                </div>
                <SpacexPatches />
            </div>
        </div>
    );
}

export default Page__spacex;
