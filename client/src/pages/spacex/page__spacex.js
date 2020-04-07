import React, { useContext } from "react";
import { SpacexLaunchesContext } from "../../components/context/SpacexLaunchesContext";
import Loader from "../../components/base/Loader";
import spaceXLaunch from "../../img/spaceXLaunch.jpg";
import Card from "../../components/base/Card";
import spacex from "../../img/spacex.png";

function Page__articles() {
    const res = useContext(SpacexLaunchesContext);

    console.log("Launches fetched! --->>>", res);

    if (!res.response) {
        return (
            <div className="mx-auto pt-12 pb-32">
                <Loader className="mx-auto" />
            </div>
        );
    }
    return (
        <div className="container mx-auto pt-12">
            <div className="9/12 mx-auto">
                <h1 className="w-9/12 mx-auto w-3/4 block">Space-X</h1>

                <p className="p w-3/4 mx-auto block">
                    SpaceX designs, manufactures and launches advanced rockets
                    and spacecraft. The company was founded in 2002 to
                    revolutionize space technology, with the ultimate goal of
                    enabling people to live on other planets.
                </p>

                <div className="w-9/12 mx-auto mt-8 mb-12">
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
            </div>
            <div className="w-9/12 mx-auto pb-24">
                <h2 className="mx-auto block py-10">Mission Patches</h2>
                <div className="container mx-auto grid gap-6 grid-cols-3">
                    {res.response.map((launch, i) => {
                        return (
                            <Card
                                key={i}
                                link={`/space-x/launch/${launch.name}`}
                                image={launch.patch ? launch.patch : spacex}
                                title={launch.name}
                                tag1={launch.flight_number}
                                tag2={launch.rocket}
                                tag3={launch.year}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Page__articles;
