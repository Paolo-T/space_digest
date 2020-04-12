import React, { useState, useEffect } from "react";
import useFetch from "../components/hooks/useFetch";
// import VideoFeatured from "./VideoFeatured";
import Loader from "./base/Loader";
import { SRLWrapper } from "simple-react-lightbox";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function PhotosPage() {
    // const [photos, setPhotos] = useState({});

    const res = useFetch("/api/photo-collection/photos", {});

    if (!res.response) {
        return <Loader />;
    }

    return (
        <div>
            <SRLWrapper>
                <div className="grid gap-6 grid-cols-1 md:grid-cols-4 object-cover">
                    {res.response.map((photo, i) => {
                        return (
                            <LazyLoadImage
                                className="object-cover object-center h-64 w-full rounded-sm"
                                effect="blur"
                                src={photo.href}
                                key={i}
                                alt={photo.title}
                            />
                        );
                    })}
                </div>
            </SRLWrapper>
        </div>
    );
}

// backgroundImage: `url(${Background})`;
export default PhotosPage;
