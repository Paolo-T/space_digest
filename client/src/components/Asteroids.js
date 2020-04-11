import React, { Component } from "react";
import Loader from "./base/Loader";
import Moment from "react-moment";

class Asteroids extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            processedResponse: null
        };
    }
    async componentDidMount() {
        await fetch("/api/asteroids/:id")
            .then(res => res.json())
            .then(processedResponse => {
                this.setState(
                    {
                        error: null,
                        isLoaded: true,
                        processedResponse
                    },
                    () =>
                        console.log(
                            "Asteroids fetched! --->>>",
                            processedResponse
                        )
                );
            })
            .catch(error => console.error("Error:", error));
    }

    render() {
        const { error, isLoaded, processedResponse } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return (
                <div className="container mx-auto text-center">
                    <Loader className="inline-block" />
                </div>
            );
        } else {
            return (
                // Asteroids
                <div className="container mx-auto text-left mb-12 md:pt-24 relative">
                    <h2 className="md:w-74 bg-teal-300 md:absolute -left-5 -top-2 mb-8 md:mb-0">
                        __Passing close to Earth this month
                    </h2>

                    <div className="mx-auto pr-30 pb-10 md:mt-10">
                        <div className="flex pt-4 md:pl-4">
                            <span className="w-1/4 font-bold text-xxs md:text-sm">
                                Name
                            </span>
                            <span className="w-1/4 font-bold text-xxs md:text-sm">
                                Approach Date
                            </span>
                            <span className="w-1/4 font-bold text-xxs md:text-sm">
                                Diameter (Meter)
                            </span>
                            <span className="w-1/4 font-bold text-xxs md:text-sm">
                                Speed (Km/second)
                            </span>
                            <span className="w-1/4 font-bold text-xxs md:text-sm">
                                Distance from Earth (km)
                            </span>
                        </div>

                        <div className="mx-auto pt-5 text-1xl font-light ">
                            {processedResponse.map(response => {
                                return (
                                    <ul className="flex mb-3">
                                        <li
                                            className="w-1/5 bg-gray-100 h-10 md:h-12 pl-2 sm:pl-4 pt-3 sm:pt-4 text-xxs md:text-sm"
                                            key={response.id}
                                        >
                                            {response.name}
                                        </li>
                                        <li
                                            className="w-1/5 h-10 sm:h-12 pl-3 sm:pl-4 pt-3 sm:pt-4 text-xxs md:text-sm"
                                            key={response.id}
                                        >
                                            {" "}
                                            <Moment format="DD/MM/YYYY">
                                                {response.approach_date}
                                            </Moment>
                                        </li>
                                        <li
                                            className="w-1/5 bg-gray-100 h-10 sm:h-12 pl-2 sm:pl-4 pt-3 sm:pt-4 text-xxs md:text-sm"
                                            key={response.id}
                                        >
                                            {response.diameter}
                                        </li>
                                        <li
                                            className="w-1/5 h-10 md:h-12 pl-2 md:pl-4 pt-3 md:pt-4 text-xxs md:text-sm"
                                            key={response.id}
                                        >
                                            {response.speed}
                                        </li>
                                        <li
                                            className="w-1/5 bg-gray-100 h-10 md:h-12 pl-2 md:pl-4 pt-2 md:pt-4 text-xxs md:text-sm"
                                            key={response.id}
                                        >
                                            {response.miss_distance}
                                        </li>
                                    </ul>
                                );
                            })}
                        </div>
                    </div>
                </div>
                // !END of Asteroids
            );
        }
    }
}
export default Asteroids;
