import React, { Component } from "react";
import Loader from "./Loader";

class Asteroids extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            asteroids: null
        };
    }
    async componentDidMount() {
        await fetch("/api/asteroids/:id")
            .then(res => res.json())
            .then(asteroids => {
                this.setState(
                    {
                        error: null,
                        isLoaded: true,
                        asteroids
                    },
                    () => console.log("Asteroids fetched! --->>>", asteroids)
                );
            })
            .catch(error => console.error("Error:", error));
    }

    render() {
        const { error, isLoaded, asteroids } = this.state;
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
                <div className="container w-3/4 mx-auto text-left my-8">
                    <div className="container mx-auto flex pr-30 pt-5 text-left">
                        <h2 className="w-1/3 inline-block flex-1 bg-gray-100 text-5xl leading-snug font-bold pl-5 py-5">
                            Space Rocks. Near Earth Asteroids
                        </h2>

                        <p className="w-2/3 text-2xl font-light mx-auto px-16">
                            NeoWs (Near Earth Object Web Service) is a RESTful
                            web service for near earth Asteroid information.
                            <br></br>
                            With NeoWs we can display Asteroids based on their
                            closest approach date to Earth.
                        </p>
                    </div>
                    <div className="container mx-auto flex pr-30 pb-10 text-left">
                        <h2 className="w-1/3 inline-block flex-1 text-5xl font-bold pl-5"></h2>

                        <ul className="w-2/3 text-2xl font-light mx-auto px-16 pt-5">
                            <li>
                                Asteroide Asteroide Asteroide Asteroide
                                Asteroide
                            </li>
                            <li>
                                Asteroide Asteroide Asteroide Asteroide
                                Asteroide
                            </li>
                            <li>
                                Asteroide Asteroide Asteroide Asteroide
                                Asteroide
                            </li>
                            <li>
                                Asteroide Asteroide Asteroide Asteroide
                                Asteroide
                            </li>
                        </ul>
                    </div>
                </div>
            );
        }
    }
}
export default Asteroids;
