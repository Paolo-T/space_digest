import React, { useRef, useEffect } from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate, align }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className="h-auto mt-6 md:mt-0">
            <ul className={`md:flex justify-${align}`}>
                {pageNumbers.map(number => (
                    <button
                        className="inline-block py-1 px-4 border border-black-500 hover:border-teal-300 focus:bg-teal-300 focus:outline-none rounded-sm text-base"
                        key={number}
                        onClick={() => paginate(number)}
                        href="#"
                    >
                        {number}
                    </button>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;
