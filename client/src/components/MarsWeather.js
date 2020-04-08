import React, { Component } from "react";
import Loader from "./base/Loader";
import marsLandscape from "../img/marsLandscape.jpg";
import Moment from "react-moment";

class MarsWeather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            solData: null
        };
    }

    async componentDidMount() {
        await fetch("/api/mars-weather/weather")
            .then(res => res.json())
            .then(solData => {
                this.setState(
                    {
                        error: null,
                        isLoaded: true,
                        solData
                    },
                    () => console.log("Weather fetched! --->>>", solData)
                );
            })
            .catch(error => console.error(error));
    }

    render() {
        const { error, isLoaded, solData } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return (
                <div className="text-center">
                    <Loader className="inline-block" />
                </div>
            );
        } else {
            return (
                <div className="mx-auto bg-grey-300 pr-30 my-24 text-left">
                    <div className="container mx-auto mb-6">
                        <h2 className="block w-9/12 mx-auto">
                            Weather on Mars equator
                        </h2>
                        <p className="p block w-9/12 mx-auto">
                            InSight is taking daily weather measurements
                            (temperature, wind, pressure) on the surface of Mars
                            at Elysium Planitia, a flat, smooth plain near Mars’
                            equator.
                        </p>
                    </div>
                    <div className="w-9/12 mx-auto bg-gray-100 my-30 py-8 px-8">
                        {/* <div className="mt-4">
                     <p className="block">
                        <strong>Sol</strong>{" "}
                        {solData[solData.length - 1].marsSol}
                     </p>
                     <p className="block">
                        <strong>Earth date:</strong> {solData[0].earth_date}
                     </p>
                     <p className="block">
                        <strong>Season:</strong> {solData[0].season}
                     </p>
                     <p>
                        <strong>high: </strong>
                        {solData[0].temperature.max}° F
                     </p>
                     <p>
                        <strong>low: </strong>
                        {solData[0].temperature.min}° F
                     </p>
                  </div> */}
                        <div className="container w-full flex mx-auto">
                            {solData.map(data => {
                                return (
                                    <div
                                        className="flex-1 text-sm"
                                        key={data.marsSol}
                                    >
                                        <p>
                                            <strong>Sol: </strong>
                                            {data.marsSol}
                                        </p>

                                        <p>
                                            <strong>Earth date: </strong>
                                            <Moment format="DD/MM">
                                                {data.earth_date}
                                            </Moment>
                                        </p>
                                        <p>
                                            <strong>high: </strong>
                                            {data.temperature.max}° F
                                        </p>
                                        <p>
                                            <strong>low: </strong>
                                            {data.temperature.min}° F
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default MarsWeather;
