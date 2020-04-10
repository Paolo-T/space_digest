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
                className="md:container mx-auto mb-10 md:mb-16"
                src={moonlanding}
                alt="Moon Landing"
            />
            <div className="container">
                <p className="md:w-9/12 mx-auto block">
                    Spirit and Opportunity landed on Mars January 3 and January
                    24, 2004 PST (Jan. 4 and Jan. 25 UTC). Both rovers lived
                    well beyond their planned 90-day missions. Opportunity
                    worked nearly 15 years on Mars and broke the driving record
                    for putting the most miles on the odometer. The twin
                    geologists, Spirit and Opportunity, have both found dramatic
                    evidence that:
                </p>

                <div className="md:w-9/12 mx-auto flex my-10 text-left">
                    <SimpleReactLightbox>
                        <PhotoCollection />
                    </SimpleReactLightbox>
                </div>
            </div>
        </div>
    );
}

export default page__photosPage;
