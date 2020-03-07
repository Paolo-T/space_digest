import React, { Component } from "react";

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
        // console.log({ solData });
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return (
                <div className="container mx-auto">
                    <h3>Loading...</h3>
                </div>
            );
        } else {
            return (
                <div className="container mx-auto">
                    <h1>Mars weather</h1>
                    <p>Season {solData.season}</p>
                    <div className="container flex mx-auto content-between">
                        {solData.map(data => {
                            return (
                                <div>
                                    <div className="flex-1 bg-gray-400 ">
                                        <h1 className="">
                                            Sol: {data.marsSol}
                                        </h1>
                                        <h3>high: {data.temperature.max}° F</h3>
                                        <h3>low: {data.temperature.min}° F</h3>
                                    </div>
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
