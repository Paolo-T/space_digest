import React from "react";
import { Link } from "react-router-dom";
import SimpleReactLightbox from "simple-react-lightbox";
import Header from "../components/Header";
import Media from "../components/Media";
// import Button from "../components/base/Button";
import Card from "../components/base/Card";
import spacex from "../img/spacex.png";

function page__home() {
    return (
        <div className="container mx-auto pt-12 pb-12">
            <Header />

            {/* <div className="container w-9/12 mx-auto flex">
                    <Card image={spacex} />
                    <Card image={spacex} />
                </div> */}

            <div className="container md:w-9/12 mx-auto mt-12 md:mt-32 mb-16 md:mb-20">
                <h2 className="md:w-56 ">Asteroids</h2>
                <p className="w-full md:w-4/5 pt-3">
                    NeoWs (Near Earth Object Web Service) is a web service for
                    near earth Asteroid information. With NeoWs we can display
                    Asteroids based on their closest approach date to Earth.
                </p>
                <button className="bg-transparent hover:bg-teal-300 text-black py-2 px-4 border border-black hover:border-transparent hover:border-black rounded mt-8">
                    <Link
                        className="block text-black text-base md:text-2xl"
                        to="/asteroids"
                    >
                        Asteroids nearby
                    </Link>
                </button>
            </div>

            <SimpleReactLightbox>
                <Media />
            </SimpleReactLightbox>

            <div className="container sm:w-9/12 mx-auto py-8 md:pt-6 md:pb-4 border-t-2 border-b-2 md:border-none md:mt-20 md:mb-32">
                <div className="">
                    <h2 className="">Photo collection</h2>
                </div>
                <p className="w-full md:w-4/5 pt-3">
                    Collection of images from NASA's image library.
                </p>
                <button className="bg-transparent hover:bg-teal-300 text-black py-2 px-4 border border-black hover:border-transparent hover:border-black rounded mt-8">
                    <Link
                        className="block text-black text-base md:text-2xl"
                        to="/photo-collection"
                    >
                        Photos
                    </Link>
                </button>
            </div>

            <div className="container md:w-9/12 mx-auto mb-16 mt-16 md:mt-10 md:mt-32 md:pt-24 relative">
                <h2 className="md:w-50 mb-4 md:mb-0 bg-teal-300 md:absolute -left-5 -top-2 ">
                    ____Mars Rover
                </h2>

                <p className=" w-full md:w-4/5 pt-3">
                    Spirit and Opportunity landed on Mars January 3 and January
                    24, 2004 PST (Jan. 4 and Jan. 25 UTC). Both rovers lived
                    well beyond their planned 90-day missions. Opportunity
                    worked nearly 15 years on Mars and broke the driving record
                    for putting the most miles on the odometer. The twin
                    geologists, Spirit and Opportunity, have both found dramatic
                    evidence that:
                </p>
                <p className=" w-full md:w-4/5 pt-3">
                    Long ago Mars was wetter Conditions at Mars could have
                    sustained microbial life, if any existed With data from the
                    rovers, mission scientists have reconstructed an ancient
                    past when Mars was awash in water. Spirit and Opportunity
                    each found evidence for past wet conditions that possibly
                    could have supported microbial life.
                </p>

                <button className="bg-transparent hover:bg-teal-300 text-black py-2 px-4 border border-black hover:border-transparent hover:border-black rounded mt-8">
                    <Link
                        className="block text-black text-xl md:text-2xl"
                        to="/nasa"
                    >
                        Rover pictures from Mars
                    </Link>
                </button>
            </div>
            <div className="container sm:w-9/12 mx-auto py-8 md:pt-6 md:pb-4 border-t-2 border-b-2 md:border-none md:mt-20 md:mb-32">
                <div className="">
                    <h2 className="">SpaceX</h2>
                </div>
                <p className="w-full md:w-4/5 pt-3">
                    SpaceX designs, manufactures and launches advanced rockets
                    and spacecraft. The company was founded in 2002 to
                    revolutionize space technology, with the ultimate goal of
                    enabling people to live on other planets..
                </p>
                <button className="bg-transparent hover:bg-teal-300 text-black py-2 px-4 border border-black hover:border-transparent hover:border-black rounded mt-8">
                    <Link
                        className="block text-black text-base md:text-2xl"
                        to="/space-x"
                    >
                        More about
                    </Link>
                </button>
            </div>
        </div>
    );
}

export default page__home;
