import React from "react";
import useFetch from "../components/hooks/useFetch";
import Loader from "./base/Loader";
import Moment from "react-moment";
// import nasa_logo from "../img/nasa_logo.svg";
// import curiosityRover from "../img/curiosityRover.jpg";
import marsLandscape from "../img/mars-landscape.svg";

function MarsWeather() {
    const res = useFetch("/api/mars-weather/weather", {});

    console.log("Weather fetched! --->>>", res);

    if (!res.response) {
        return (
            <div className="container mx-auto text-center">
                <Loader className="inline-block" />
            </div>
        );
    }

    const solData = res.response;
    return (
        <div
            className="mx-auto md:pr-30 bg-gray-100 py-10 px-10 rounded-md bg-cover text-orange-900"
            style={{ backgroundImage: `url("${marsLandscape}")` }}
        >
            {/* <img className="w-full" src={marsLandscape} alt="Mars Rover" /> */}
            <h2 className="block mb:w-9/12 mx-auto">Weather on Mars equator</h2>
            <p className="w-3/4">
                InSight is taking daily weather measurements (temperature, wind,
                pressure) on the surface of Mars at Elysium Planitia, a flat,
                smooth plain near Mars’ equator.
            </p>

            <div className="md:w-full mx-auto text-center">
                <div className="w-full my-8 py-6 px-4 text-left">
                    <p className="inline-block">
                        <strong>Sol</strong>{" "}
                        {solData[solData.length - 1].marsSol}
                    </p>
                    <p>
                        <strong>Earth date:</strong>{" "}
                        <Moment format="DD/MM">
                            {solData[solData.length - 1].earth_date}
                        </Moment>
                    </p>
                    <p>
                        <strong>Season:</strong>{" "}
                        {solData[solData.length - 1].season}
                    </p>
                    <p>
                        <strong>high: </strong>
                        {solData[solData.length - 1].temperature.max}° F
                    </p>
                    <p>
                        <strong>low: </strong>
                        {solData[solData.length - 1].temperature.min}° F
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row mx-auto bg-orange-100 rounded-md opacity-75">
                    {solData.map(data => {
                        return (
                            <div
                                className="flex-1 text-xs py-5 text-left"
                                key={data.marsSol}
                            >
                                <ul>
                                    <li className="text-lg md:pl-4 ">
                                        <strong>Sol: </strong>
                                        {data.marsSol}
                                    </li>

                                    <li className="text-xs md:pl-4 ">
                                        <strong>Earth date: </strong>
                                        <Moment format="DD/MM">
                                            {data.earth_date}
                                        </Moment>
                                    </li>
                                    <li className="text-xs md:pl-4 ">
                                        <strong>high: </strong>
                                        {data.temperature.max}° F
                                    </li>
                                    <li className="text-xs md:pl-4 ">
                                        <strong>low: </strong>
                                        {data.temperature.min}° F
                                    </li>
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
export default MarsWeather;
