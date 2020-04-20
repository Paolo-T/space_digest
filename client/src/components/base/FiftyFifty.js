import React from "react";
import Button from "./Button";

function FiftyFifty({
    image,
    title,
    text,
    btn_text,
    link,
    padding,
    padding_img,
    reverse
}) {
    return (
        <React.Fragment>
            <div
                className={`container md:w-9/12 mx-auto flex flex-col md:flex-row mt-0 md:mt-24 md:mb-40
                ${padding ? padding : ""}
                ${reverse && "md:flex-row-reverse"}`}
            >
                <div
                    className={`flex-1 bg-gray-100 md:mt-10 md:mt-0 rounded-lg
                    ${reverse ? "md:mr-0 md:ml-20" : "md:mr-20"}`}
                >
                    <img
                        className={`
                        ${
                            padding_img ? padding_img : ""
                        } w-full h-full inline-block`}
                        src={image}
                        alt="spacex misson patch"
                    />
                </div>
                <div className="flex-1 mb-12 md:mt-0">
                    <div className="h-full md:flex flex-col justify-between">
                        <div>
                            <h2 className="hidden md:inline-block bg-teal-300 md:mt-10 md:mt-0">
                                {title}
                            </h2>
                            <p className="block text-bold md:mb-10 pt-6 md:mt-4">
                                {text}
                            </p>
                        </div>

                        <Button btn_text={btn_text} link={link} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default FiftyFifty;
