import React, { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import Loader from "./base/Loader";
import Pagination from "./base/Pagination";
import chunkArray from "../utils/chunkArray";
import Photos from "./Photos";

const PHOTOS_PER_PAGE = 15;
const START_ON_PAGE_NUMBER = 1;

function PhotosPage() {
    const res = useFetch("/api/photo-collection/photos", {});
    const [currentPage, setCurrentPage] = useState(START_ON_PAGE_NUMBER);
    const [photosToDisplay, setPhotosToDisplay] = useState();

    console.log("Photos fetched! --->>>", res);

    useEffect(() => {
        if (res.response) {
            setPhotosToDisplay(chunkArray(res.response, PHOTOS_PER_PAGE));
        }
    }, [res.response]);

    function renderPhotoPage(pageIndex) {
        return <Photos items={photosToDisplay[pageIndex]} key={pageIndex} />;
    }

    const changePage = pageNumber => setCurrentPage(pageNumber);

    return (
        <>
            {photosToDisplay ? (
                <div className="text-center">
                    <Pagination
                        numberOfPages={photosToDisplay.length}
                        onPageChange={changePage}
                        activePageNumber={currentPage}
                    />
                    {renderPhotoPage(currentPage - 1)}
                </div>
            ) : (
                <div className="container mx-auto h-screen text-center">
                    <Loader className="inline-block" />
                </div>
            )}
        </>
    );
}
export default PhotosPage;
