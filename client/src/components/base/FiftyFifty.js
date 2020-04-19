import React from "react";
import Button from "./Button";

function FiftyFifty({ image, title, text, btn_text, link, reverse }) {
    return (
        <React.Fragment>
            <div
                className={`container md:w-9/12 mx-auto flex flex-col md:flex-row md:my-20 py-16
                ${reverse && "md:flex-row-reverse"}`}
            >
                <div
                    className={`flex-1 bg-gray-100 mt-10 md:mt-0
                ${reverse ? "md:mr-0 md:ml-20" : "md:mr-20"}`}
                >
                    <img
                        className="py-10 px-10  inline-block bg-grey-300"
                        src={image}
                        alt="spacex misson patch"
                    />
                </div>
                <div className="flex-1">
                    <div className="h-full md:flex flex-col justify-between">
                        <div>
                            <h2 className="hidden md:inline-block bg-teal-300 mt-10 md:mt-0">
                                {title}
                            </h2>
                        </div>

                        <p className="block text-bold mb-10 md:mt-4">{text}</p>
                        <Button btn_text={btn_text} link={link} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default FiftyFifty;
