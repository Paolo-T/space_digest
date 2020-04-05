import React, { useContext } from "react";
import { SpacexLaunchesContext } from "../../components/context/SpacexLaunchesContext";
import Loader from "../../components/base/Loader";
import spaceXLaunch from "../../img/spaceXLaunch.jpg";

function Page__launch(props) {
    // console.log(props.match.params.id);

    const res = useContext(SpacexLaunchesContext);

    if (!res.response) {
        return (
            <div className="mx-auto pt-12 pb-32">
                <Loader className="mx-auto" />
            </div>
        );
    }

    console.log("Launch fetched! --->>>", res);

    return (
        <div className="container w-9/12 mx-auto">
            <h1 className="w-9/12 mx-auto">{props.match.params.id}</h1>

            <img
                className="container mx-auto mb-16 "
                src={spaceXLaunch}
                alt="Moon Landing"
            />
            <p className="p  block">{res.response[0].details}</p>
        </div>
    );
}

export default Page__launch;
