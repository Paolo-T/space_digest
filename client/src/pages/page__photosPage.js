import React from "react";
import SimpleReactLightbox from "simple-react-lightbox";
import PhotoCollection from "../components/PhotoCollection";
import moonlanding from "../img/moonlanding.jpg";

function page__photosPage() {
    return (
        <div className="mx-auto pt-12 mb-12">
            <h1 className="container mx-auto block w-3/4 md:w-9/12 mx-auto max-auto">
                Photo Collection
            </h1>

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
