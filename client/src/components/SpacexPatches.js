import React, { useContext } from "react";
import { SpacexLaunchesContext } from "./context/SpacexLaunchesContext";
import Loader from "./base/Loader";
import Card from "./base/Card";
import spacex from "../img/spacex.png";

function SpacexPatches() {
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
    );
}

export default SpacexPatches;
