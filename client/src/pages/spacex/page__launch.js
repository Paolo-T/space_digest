import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SpacexLaunchesContext } from "../../components/context/SpacexLaunchesContext";
import Loader from "../../components/base/Loader";
import VideoFeatured from "../../components/base/VideoFeatured";
import { SRLWrapper } from "simple-react-lightbox";

function Page__launch(props) {
    console.log(props.match);

    const res = useContext(SpacexLaunchesContext);

    if (!res.response) {
        return (
            <div className="mx-auto pt-12 pb-32">
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
        <div className="container mx-auto py-40">
            <div className="flex justify-between align-bottom">
                <h1 className="mt0 ">{props.match.params.id}</h1>

                <button className="h-10 block bg-transparent hover:bg-teal-300 text-black py-1 px-4 border border-black hover:border-transparent hover:border-black rounded ">
                    <Link className="block text-black text-lg" to="/space-x">
                        Back
                    </Link>
                </button>
            </div>
            <VideoFeatured
                width={1280}
                height={720}
                url={pageData[0].links.video_link}
            />
            <div className="flex my-20">
                <div className="flex-1 bg-gray-100 mr-20">
                    <img
                        className=" py-20 px-20 inline-block bg-grey-300"
                        src={pageData[0].patch}
                        alt="spacex misson patch"
                    />
                </div>
                <div className="flex-1">
                    <h2 className="">{props.match.params.id}</h2>
                    <p className="p inline-block">{pageData[0].details}</p>
                    <p className="p inline-block">
                        Launch Date: {pageData[0].launch_date}
                    </p>
                    {pageData[0].failure_details ? (
                        <p className="p inline-block">
                            Failure details:{" "}
                            {pageData[0].failure_details.reason}
                        </p>
                    ) : null}
                    <div>
                        <h3>Links</h3>
                        <ul>
                            <li>
                                <a
                                    className="block"
                                    href={pageData[0].links.article_link}
                                >
                                    Article
                                </a>
                                <a
                                    className="block"
                                    href={pageData[0].links.wikipedia}
                                >
                                    Wikipedia
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {pageData[0].links.flickr_images ? (
                <div className="grid gap-3 grid-cols-4 object-cover">
                    {pageData[0].links.flickr_images.map((photo, i) => {
                        return (
                            <img
                                className="object-cover object-center h-64 w-full rounded-sm"
                                src={photo}
                                key={i}
                                // alt={photo.title}
                            />
                        );
                    })}
                </div>
            ) : null}
        </div>
    );
}

export default Page__launch;
