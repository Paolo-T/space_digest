import React from "react";
import { SpacexLaunchesContext } from "../../components/context/SpacexLaunchesContext";
import { SRLWrapper } from "simple-react-lightbox";

function SpacexLaunchesPhotos() {
    // console.log(props.match);

    const res = useContext(SpacexLaunchesContext);

    if (!res.response) {
        return (
            <div className="mx-auto pt-20 pb-32">
                <Loader className="mx-auto" />
            </div>
        );
    }
    console.log("Launch fetched! --->>>", res);

    const pageData = res.response
        .map(res => res)
        .filter(res => res.name == props.match.params.id);

    console.log({ pageData });
    return (
        <div>
            <SRLWrapper>
                <h2 className="container mx-auto block bg-teal-300 mt-10 md:mt-0">
                    ___Images
                </h2>
                <div className="container grid gap-4 grid-cols-1 md:grid-cols-3 mt-10 md:mt-10">
                    {pageData[0].links.flickr_images.map((photo, i) => {
                        return (
                            <img
                                className="object-cover object-center h-64 w-full rounded-sm"
                                // effect="blur"
                                src={photo}
                                key={i}
                                alt="Mission Launch"
                            />
                        );
                    })}
                </div>
            </SRLWrapper>
        </div>
    );
}

export default SpacexLaunchesPhotos;
