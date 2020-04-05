import React, { useContext } from "react";
import { SpacexLaunchesContext } from "./context/SpacexLaunchesContext";
import Loader from "./base/Loader";

function PageLaunchDetails() {
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
        <div>
            <h1>Content</h1>
        </div>
    );
}

export default PageLaunchDetails;
