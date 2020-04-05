import React, { useContext } from "react";
import { SpacexLaunchesContext } from "./context/SpacexLaunchesContext";
import Loader from "./base/Loader";
import Card from "./base/Card";

function SpacexLaunches() {
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
                        toLink={"/launch"}
                        image={launch.patch}
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

export default SpacexLaunches;
