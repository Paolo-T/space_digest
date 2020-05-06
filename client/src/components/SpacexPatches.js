import React, { useState, useContext, useEffect } from "react";
import { SpacexLaunchesContext } from "../context/SpacexLaunchesContext";
import Loader from "./base/Loader";
import spacex from "../img/spacex.png";
import Pagination from "./base/Pagination";
import { useTrail } from "react-spring";
import Patches from "./Patches";

function SpacexPatches() {
    const res = useContext(SpacexLaunchesContext);
    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [patchesToDisplay, setPatchesToDisplay] = useState();
    const [postsPerPage] = useState(16);

    console.log("Launches fetched! --->>>", res);

    // Pagination - Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    useEffect(() => {
        const indexOfLastPost = currentPage * postsPerPage;
        const indexOfFirstPost = indexOfLastPost - postsPerPage;

        if (res.response) {
            setPatchesToDisplay(
                res.response.slice(indexOfFirstPost, indexOfLastPost)
            );
        }
    }, [res.response, currentPage]);

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
                            postsPerPage={postsPerPage}
                            totalPosts={res.response.length}
                            paginate={paginate}
                            align="end"
                        />
                    </div>
                    <Patches items={patchesToDisplay} />
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
