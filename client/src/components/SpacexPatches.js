import React, { useState, useContext, useEffect } from "react";
import { SpacexLaunchesContext } from "../context/SpacexLaunchesContext";
import Loader from "./base/Loader";
import Pagination from "./base/Pagination";
import Patches from "./Patches";
import chunkArray from "../utils/chunkArray";

const PATCHES_PER_PAGE = 16;
const START_ON_PAGE_NUMBER = 1;

function SpacexPatches() {
    const res = useContext(SpacexLaunchesContext);
    const [currentPage, setCurrentPage] = useState(START_ON_PAGE_NUMBER);
    const [patchesToDisplay, setPatchesToDisplay] = useState();

    console.log("Launches fetched! --->>>", res);

    const changePage = pageNumber => setCurrentPage(pageNumber);

    useEffect(() => {
        if (res.response) {
            setPatchesToDisplay(chunkArray(res.response, PATCHES_PER_PAGE));
        }
    }, [res.response, currentPage]);

    function renderPatchPage(pageIndex) {
        return <Patches items={patchesToDisplay[pageIndex]} key={pageIndex} />;
    }

    return (
        <>
            {patchesToDisplay ? (
                <div>
                    <div className="md:flex justify-between items-end mb-8 md:mb-12">
                        <div className="inline-block">
                            <h2 className="container w-full bg-teal-300 mb-0">
                                Mission Patches
                            </h2>
                        </div>

                        <Pagination
                            numberOfPages={patchesToDisplay.length}
                            onPageChange={changePage}
                            activePageNumber={currentPage}
                        />
                    </div>

                    {renderPatchPage(currentPage - 1)}
                </div>
            ) : (
                <div className="mx-auto pt-12 pb-32">
                    <Loader className="mx-auto" />
                </div>
            )}
        </>
    );
}

export default SpacexPatches;
