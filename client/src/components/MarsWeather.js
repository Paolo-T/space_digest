import React, { Component } from "react";

class MarsWeather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: true,
            marsData: [
                {
                    sol: {
                        at: null,
                        pre: null,
                        hws: null
                    }
                }
            ]
        };
    }

    async componentDidMount() {
        const JSO = await fetch("/api/marsWeather/weather")
            .then(res => res.json())
            .then(marsData => {
                this.setState(
                    {
                        error: null,
                        isLoaded: true,
                        marsData: [
                            {
                                sol_key: {
                                    at: marsData.sol_key[0].AT.av,
                                    pre: marsData.sol_key[0].PRE.av,
                                    hws: marsData.sol_key[0].HWS.av
                                }
                            }
                        ]
                    },
                    () => console.log("Weather fetched! --->>>", marsData)
                );
            })
            .catch(error => console.error(error));
    }

    render() {
        const { marsData } = this.state;
        // console.log(marsData);

        const values = Object.values(marsData);
        console.log(values); // [28, 17, 54]

        return (
            <div className="container mx-auto text-center py-8 my-8">
                <h2 className="text-5xl mb-2 font-bold uppercase">
                    Weather on Mars
                </h2>
                <iframe
                    className="inline-block rounded-md"
                    src="https://mars.nasa.gov/layout/embed/image/insightweather/"
                    width="800"
                    height="530"
                    scrolling="no"
                    frameborder="0"
                ></iframe>
            </div>
        );
    }
}

export default MarsWeather;
