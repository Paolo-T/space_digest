import React from "react";
import nasaLogo from "../../img/nasa-logo.svg";
import spaceXLogo from "../../img/spacex-logo.svg";

function Footer() {
    return (
        <footer className="container w-full mx-auto h-24 bg-gray-300 flex items-center px-6 mb-8">
            <div className="w-full flex items-center justify-between ">
                {/* <span className="text-2xl leading-snug mr-4">Powered by</span> */}
                {/* <div className="flex">
               <img className="w-16 mr-4" src={nasaLogo} alt="nasa-logo" />
               <img
                  className="inline-block w-32 "
                  src={spaceXLogo}
                  alt="space-x-logo"
               />
            </div> */}

                <span className="text-xl leading-snug align-baseline">
                    hey@spacedigest.live
                </span>
            </div>
        </footer>
    );
}

export default Footer;
