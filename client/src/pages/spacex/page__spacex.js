import React, { useContext } from "react";
import spaceXLaunch from "../../img/spaceXLaunch.jpg";
import SpacexPatches from "../../components/SpacexPatches";

function Page__spacex() {
    return (
        <div className="container mx-auto pt-12">
            <div className="w-9/12 mx-auto pb-24">
                <h1 className="mx-auto inline-block">SpaceX</h1>

                <p className="p w-3/4 block">
                    SpaceX designs, manufactures and launches advanced rockets
                    and spacecraft. The company was founded in 2002 to
                    revolutionize space technology, with the ultimate goal of
                    enabling people to live on other planets.
                </p>

                <div className="mx-auto mb-12">
                    <p className="p inline-block pt-4 mr-10">
                        HQ: Hawthorne - California
                    </p>
                    <p className="p inline-block py-1 ">Address: Rocket Road</p>
                </div>
                <img
                    className="container mx-auto mb-16"
                    src={spaceXLaunch}
                    alt="Moon Landing"
                />

                <h2 className="mx-auto block py-10">Mission Patches</h2>
                <SpacexPatches />
            </div>
        </div>
    );
}

export default Page__spacex;
