import React, { Component } from "react";
class Image extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            imageData: {
                date: null,
                title: null,
                explenation: null,
                url: null,
                hdurl: null
            }
        };
    }
    async componentDidMount() {
        const onerror = error => {
            this.setState({
                isLoaded: false,
                error
            });
        };
        await fetch("/api/images/image")
            .then(res => res.json(), onerror)
            .then(imageData => {
                this.setState(
                    {
                        isLoaded: true,
                        imageData: {
                            date: imageData.date,
                            title: imageData.title,
                            explanation: imageData.explanation,
                            url: imageData.url,
                            hdurl: imageData.hdurl
                        }
                    },
                    () => console.log("Image fetched! >>>", imageData)
                );
            }, onerror);
    }
    render() {
        const { error, isLoaded, imageData } = this.state;
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
                    <div className="">
                        <h1 className="text-6xl font-semibold leading-none">
                            Photo of the day
                        </h1>
                        <h3>{imageData.title}</h3>
                        <img
                            className="rounded-lg"
                            src={imageData.hdurl}
                            alt="Some thing"
                        />
                        <p>{imageData.explanation}</p>
                    </div>
                </div>
            );
        }
    }
}
export default Image;
