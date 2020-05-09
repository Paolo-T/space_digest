import React, { useMemo } from "react";

const Pagination = ({ numberOfPages, onPageChange }) => {
    const pageNumbers = useMemo(() =>
        Array(numberOfPages)
            .fill()
            .map((_, i) => i + 1)
    );

    return (
        <nav className="inline-block h-auto mt-6 md:mt-0">
            <ul className="md:flex flex-row">
                {pageNumbers.map(pageNumber => (
                    <li className="inline-block ml-1" key={pageNumber}>
                        <button
                            className="inline-block py-1 px-3 border border-black-500 hover:border-teal-300 focus:bg-teal-300 focus:outline-none rounded-sm text-sm"
                            onClick={() => onPageChange(pageNumber)}
                        >
                            {pageNumber}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;
