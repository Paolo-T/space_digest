import React from "react";
import { SpacexLaunchesProvider } from "../../components/context/SpacexLaunchesContext";
import PageLaunchDetails from "../../components/PageLaunchDetails";

function Page__launch() {
    return (
        <div>
            <h1>Page Launch</h1>
            <SpacexLaunchesProvider>
                <PageLaunchDetails />
            </SpacexLaunchesProvider>
        </div>
    );
}

export default Page__launch;
