import React from "react";
import useFetch from "../components/hooks/useFetch";
import Loader from "./base/Loader";
import { SRLWrapper } from "simple-react-lightbox";

function PhotosPage() {
    const res = useFetch("/api/photo-collection/photos", {});

    console.log("Photos fetched! --->>>", res);

    if (!res.response) {
        return (
            <div className="container mx-auto text-center">
                <Loader className="inline-block" />
            </div>
        );
    }

    return (
        <SRLWrapper>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-3 object-cover">
                {res.response.map((photo, i) => {
                    return (
                        <img
                            className="object-cover object-center h-74 w-full rounded-sm col-span-1"
                            src={photo.href}
                            key={i}
                            alt={photo.title}
                        />
                    );
                })}
            </div>
        </SRLWrapper>
    );
}
export default PhotosPage;
