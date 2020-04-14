import React from "react";

function page__about() {
    return (
        <div className="container md:w-3/4 mx-auto pt-20 md:pt-32 md:mb-12 ">
            <h1 className="w-2/4">About Space Digest</h1>
            <p className="md:w-2/4 block">
                This is an informational website created as a personal project,
                for fans of Nasa, SpaceX and space in general. Here you will
                find data and media,past and future space missions.
            </p>
            <p className="md:w-2/4 block mt-6">
                Special thanks to the teams at NASA and SpaceX for providing and
                maintaining all the data this website is built upon.
            </p>
            <p className="md:w-2/4 block mt-6">
                The plan for the future includes further development for to
                improve the experience. Feel free to say hey at:
            </p>
            <p className="md:w-2/4 block mt-6">hey@spacedigest.live</p>
            <p className="md:w-2/4 block mt-6">Thanks for visiting 🤘🏻</p>
            <p className="md:w-2/4 block mt-6">P.</p>
        </div>
    );
}

export default page__about;
