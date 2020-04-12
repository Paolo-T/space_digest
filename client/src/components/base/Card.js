import React from "react";
import { Link } from "react-router-dom";

function Card({ image, link, key, title, tag1, tag2, tag3 }) {
    return (
        <div key={key} className="max-w-sm rounded overflow-hidden shadow">
            <Link className="block text-black text-2xl" to={link}>
                <img
                    className="w-full py-12 px-12"
                    effect="blur"
                    src={image}
                    alt="Sunset in the mountains"
                />

                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{title}</div>
                    <p className="text-gray-700 text-base"></p>
                </div>
                <div className="flex h-16 justify-between bg-gray-200 px-6 py-4">
                    <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                        Launch {tag1}
                    </span>
                    <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-700">
                        {tag2}
                    </span>
                    <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                        {tag3}
                    </span>
                </div>
            </Link>
        </div>
    );
}

export default Card;
