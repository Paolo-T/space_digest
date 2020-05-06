import React from "react";
import { Link } from "react-router-dom";

function CardImage({ src, alt }) {
    return (
        <div className="py-12 px-12">
            <div style={{ paddingTop: "100%" }} className="relative">
                <img
                    className="w-full absolute top-0 left-0"
                    effect="blur"
                    src={src}
                    alt={alt}
                />
            </div>
        </div>
    );
}

function Card({ image, link, key, title, tag1, tag2, tag3 }) {
    return (
        <div
            key={key}
            className="max-w-sm bg-gray-100 rounded overflow-hidden border hover:border-teal-300 text-center"
        >
            <Link to={link}>
                <div>
                    <CardImage src={image} alt={title} />

                    <p className="font-bold text-2xl mb-2 text-gray-700 pb-4">
                        {title}
                    </p>
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
