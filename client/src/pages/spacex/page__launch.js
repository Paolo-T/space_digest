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
        <div className="mx-auto pt-24 mb-16 md:mb-20 md:py-32">
            <div className="container flex flex-col content-end">
                <h1 className="flex-1 mt-0 mb-8">{props.match.params.id}</h1>
                <button className="order-first w-10 underline md:w-20 h-10 inline-block bg-transparent hover:bg-teal-300 text-black py-1 md:px-4 md:border border-black hover:border-transparent hover:border-black rounded content-end mb-4 md:mb-10">
                    <Link
                        className="block text-black text-xl md:text-2x"
                        to="/space-x"
                    >
                        Back
                    </Link>
                </button>
            </div>

            {!pageData[0].upcoming ? (
                <VideoFeatured
                    className="w-screen mb-10"
                    width="100vw"
                    height="46vw"
                    url={pageData[0].links.video_link}
                />
            ) : null}

            <div className="container flex flex-col md:flex-row md:my-20">
                <div className="flex-1 bg-gray-100 rounded-sm mt-10 md:mt-0 md:mr-20">
                    <img
                        className="py-10 px-10 md:py-20 md:px-20 inline-block bg-grey-300"
                        src={pageData[0].patch ? pageData[0].patch : spacex}
                        alt="spacex misson patch"
                    />
                </div>
                <div className="flex-1">
                    <div className="h-full md:flex flex-col justify-between">
                        <div className="">
                            <h2 className="hidden md:block bg-teal-300 inline-block mt-10 md:mt-0">
                                {props.match.params.id}
                            </h2>

                            <p className="inline-block">
                                {pageData[0].details}
                            </p>
                            {pageData[0].failure_details ? (
                                <p className="inline-block pb-8">
                                    Failure details:{" "}
                                    {pageData[0].failure_details.reason}
                                </p>
                            ) : null}

                            <p className="block text-bold mb-10 md:mt-8 ">
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
                                <li className="flex flex-col md:flex-row">
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
                <div className="w-full grid gap-4 grid-cols-1 md:grid-cols-3 mt-10 md:mt-10">
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
