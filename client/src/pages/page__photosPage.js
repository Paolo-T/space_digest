import React from "react";
import SimpleReactLightbox from "simple-react-lightbox";
import PhotoCollection from "../components/PhotoCollection";
import moonlanding from "../img/moonlanding.jpg";

function page__photosPage() {
    return (
        <div className="mx-auto pt-24 mb-12">
            <div className="md:w-9/12 mx-auto text-center mb-12">
                <h1 className="mb-3">Photo collection</h1>
                <p className="md:w-3/4 mx-auto">
                    NASA.gov brings you the latest images, videos and news from
                    America's space agency. Get the latest updates on NASA
                    missions, and learn about the quest to reveal the unknown
                    and benefit all humankind.
                </p>
            </div>

            <img
                className="container mx-auto mb-10 md:mb-16"
                src={moonlanding}
                alt="Moon Landing"
            />
            <div className="container">
                <div className="md:w-9/12 mx-auto my-10">
                    <SimpleReactLightbox>
                        <PhotoCollection />
                    </SimpleReactLightbox>
                </div>
            </div>
        </div>
    );
}

export default page__photosPage;
