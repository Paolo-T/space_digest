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
                <div className="container mx-auto text-center">
                    <h2 className="text-2xl mb-4 font-bold uppercase">
                        Photo of the the day
                    </h2>
                    <img
                        className="rounded-lg mb-12"
                        src={imageData.hdurl}
                        alt="Some thing"
                    />
                    <h3 className="text-2xl mb-4 font-bold">
                        {imageData.title}
                    </h3>
                    <p className="w-4/5  text-2xl font-light">
                        {imageData.explanation}
                    </p>
                </div>
            );
        }
    }
}
export default Image;
