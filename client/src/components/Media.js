import React from "react";
import VideoFeatured from "./base/VideoFeatured";
import Loader from "./base/Loader";
import { SRLWrapper } from "simple-react-lightbox";
import useFetch from "../components/hooks/useFetch";

function Media() {
    const res = useFetch("/api/images/image", {});

    console.log("Media fetched! --->>>", res);

    if (!res.response) {
        return <Loader />;
    }

    const mediaData = res.response;

    if (mediaData.media_type !== "video") {
        return (
            // Media Image
            <div className="container md:w-9/12 mx-auto mb-12 md:mb-16 mt-10 md:mt-40 text-center">
                <h2 className="inline-block md:w-w-64 mb-2 md:mb-10 bg-teal-300">
                    Daily Astronomy Image
                </h2>

                <SRLWrapper>
                    <a href={mediaData.url} data-attribute="SRL">
                        <img
                            className="w-full mx-auto md:mb-12 rounded-sm cursor-pointer rounded-sm"
                            src={mediaData.url}
                            alt={mediaData.title}
                        />
                    </a>
                </SRLWrapper>

                <div className="container mx-auto mt-4 md:mt-12 md:mt-16 md:mb-16 md:mb-20">
                    <div className="md:flex pt-8 md:pt-10 pb-10 md:pb-16 px-4 md:px-12 text-left bg-gray-100">
                        <h2 className="inline-block flex-1 pt-5">
                            {mediaData.title}
                        </h2>
                        <p className="md:w-3/5 mx-auto md:pl-16 pt-5 rounded-lg">
                            {mediaData.explanation}
                        </p>
                    </div>
                </div>
            </div>
            // !END of Media Image
        );
    } else {
        return (
            // Media Videos
            <div className="container mx-auto text-center mt-10">
                <h2 className="md:w-9/12 mx-auto mb-12">
                    Daily Astronomy Video
                </h2>
                <VideoFeatured
                    width="100vw"
                    height="46vw"
                    url={mediaData.url}
                />
                <div className="container md:w-9/12 mx-auto mt-12 md:mt-16 mb-16 md:mb-20">
                    <div className="flex pt-10 pb-16 px-16 text-left bg-gray-100">
                        <h2 className="w-1/3 inline-block flex-1 pl-5 pr-5 pt-5">
                            {mediaData.title}
                        </h2>
                        <p className="w-4/5 mx-auto pl-16 pt-5">
                            {mediaData.explanation}
                        </p>
                    </div>
                </div>
            </div>
            // !END of Media Video
        );
    }
}

export default Media;
