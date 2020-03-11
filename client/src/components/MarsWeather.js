import React, { Component } from "react";
import Loader from "./Loader";
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
        await fetch("/api/marsWeather/weather")
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
                <div className="container mx-auto bg-gray-100 my-30 py-8 pl-8">
                    <h1 className=" text-5xl mb-2 font-bold">
                        Latest Weather at Elysium Planitia
                    </h1>
                    <p className=" inline-block text-2xl">
                        InSight is taking daily weather measurements
                        (temperature, wind, pressure) on the surface of Mars at
                        Elysium Planitia, a flat, smooth plain near Mars’
                        equator.
                    </p>
                    <p className="mt-4">
                        <strong>Season: </strong>
                        {solData.marsSol}
                    </p>
                    <div className="container w-full flex mx-auto">
                        {solData.map(data => {
                            return (
                                <div className="flex-1 py-4" key={data.marsSol}>
                                    <h1>
                                        <strong>Sol: </strong>
                                        {data.marsSol}
                                    </h1>
                                    <h3>
                                        <strong>high: </strong>
                                        {data.temperature.max}° F
                                    </h3>
                                    <h3>
                                        <strong>low: </strong>
                                        {data.temperature.min}° F
                                    </h3>
                                </div>
                            );
                        })}
                    </div>
                </div>
            );
        }
    }
}

export default MarsWeather;
