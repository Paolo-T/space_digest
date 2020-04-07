import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SpacexLaunchesContext } from "../../components/context/SpacexLaunchesContext";
import Loader from "../../components/base/Loader";
import VideoFeatured from "../../components/base/VideoFeatured";
import spacex from "../../img/spacex.png";
import Moment from "react-moment";

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
        <div className="container mx-auto py-32">
            <div className="flex  content-end">
                <h1 className="flex-1 mt-0 mb-10">{props.match.params.id}</h1>
                <button className="h-10 inline-block bg-transparent hover:bg-teal-300 text-black py-1 px-4 border border-black hover:border-transparent hover:border-black rounded content-end">
                    <Link className="block text-black text-lg" to="/space-x">
                        Back
                    </Link>
                </button>
            </div>

            {!pageData[0].upcoming ? (
                <VideoFeatured
                    width={1280}
                    height={720}
                    url={pageData[0].links.video_link}
                />
            ) : null}

            <div className="flex my-20">
                <div className="flex-1 bg-gray-100 rounded-md mr-20">
                    <img
                        className=" py-20 px-20 inline-block bg-grey-300"
                        src={pageData[0].patch ? pageData[0].patch : spacex}
                        alt="spacex misson patch"
                    />
                </div>
                <div className="flex-1">
                    <div className="h-full flex flex-col justify-between">
                        <div>
                            <h2 className="">{props.match.params.id}</h2>

                            <p className="p inline-block">
                                {pageData[0].details}
                            </p>
                            {pageData[0].failure_details ? (
                                <p className="p inline-block pb-8">
                                    Failure details:{" "}
                                    {pageData[0].failure_details.reason}
                                </p>
                            ) : null}
                            <p className="p inline-block text-bold">
                                {" "}
                                Launch Date:&nbsp;
                                <Moment format="DD/MM/YYYY">
                                    {pageData[0].launch_date}
                                </Moment>
                            </p>
                        </div>

                        <div>
                            {/* <h3>Links</h3> */}
                            <ul>
                                <li className="flex">
                                    <a
                                        className="a inline-block mr-16"
                                        href={pageData[0].links.article_link}
                                    >
                                        Article
                                    </a>
                                    <a
                                        className="a inline-block"
                                        href={pageData[0].links.wikipedia}
                                    >
                                        Wikipedia
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {pageData[0].links.flickr_images ? (
                <div className="w-full grid gap-3 grid-cols-3">
                    {pageData[0].links.flickr_images.map((photo, i) => {
                        return (
                            <img
                                className="object-cover object-center h-64 w-full rounded-sm"
                                src={photo}
                                key={i}
                                alt="Mission Launch"
                            />
                        );
                    })}
                </div>
            ) : null}
        </div>
    );
}

export default Page__launch;
