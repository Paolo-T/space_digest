import React, { Component } from "react";
import VideoFeatured from "./base/VideoFeatured";
import Loader from "./base/Loader";
import { SRLWrapper } from "simple-react-lightbox";
class Media extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            mediaData: null
        };
    }
    async componentDidMount() {
        await fetch("/api/images/image")
            .then(res => res.json())
            .then(mediaData => {
                this.setState(
                    {
                        isLoaded: true,
                        mediaData: {
                            date: mediaData.date,
                            title: mediaData.title,
                            explanation: mediaData.explanation,
                            url: mediaData.url,
                            hdurl: mediaData.hdurl,
                            media_type: mediaData.media_type
                        }
                    },
                    () => console.log("Media fetched! --->>>", mediaData)
                );
            })
            .catch(error => console.error("Error:", error));
    }

    render() {
        const { error, isLoaded, mediaData } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return (
                <div className="container mx-auto text-center">
                    <Loader className="inline-block" />
                </div>
            );
        } else if (mediaData.media_type !== "video") {
            return (
                // Media Image
                <div className="container md:w-9/12 mx-auto mb-12 md:mb-16 mt-10 md:mt-48 relative">
                    <h2 className="w-60 md:absolute -left-5 -top-5 md:w-w-64 mb-8 md:mb-0 bg-teal-300">
                        ____Daily Astronomy Image
                    </h2>

                    <SRLWrapper>
                        <a href={mediaData.url} data-attribute="SRL">
                            <img
                                className="w-full mx-auto mb-12 rounded-sm cursor-pointer"
                                src={mediaData.url}
                                alt={mediaData.title}
                            />
                        </a>
                    </SRLWrapper>

                    <div className=" mx-auto">
                        <h3 className="w-full md:w-2/3 inline-block flex-1 font-bold">
                            {mediaData.title}
                        </h3>
                        <p className=" mx-auto  md:pr-16">
                            {mediaData.explanation}
                        </p>
                    </div>
                </div>
                // !END of Media Image
            );
        } else {
            return (
                // Media Videos
                <div className="container mx-auto text-center mt-10">
                    <h2 className="text-2xl mb-3 ">Daily Astronomy Video</h2>
                    <VideoFeatured url={mediaData.url} />
                    <div className="w-9/12">
                        <div className="container mx-auto flex pr-48 py-10 text-left">
                            <h3 className="w-1/3 inline-block flex-1 bg-gray-100 rounded-md text-2xl font-bold pl-5 pr-5 pt-5">
                                {mediaData.title}
                            </h3>
                            <p className="p w-4/5 text-2xl font-light mx-auto px-16 pt-5">
                                {mediaData.explanation}
                            </p>
                        </div>
                    </div>
                </div>
                // !END of Media Video
            );
        }
    }
}
export default Media;
