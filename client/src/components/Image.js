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
                    <div className="flex justify-center">
                        <h2 className="text-2xl mb-2 uppercase">
                            <strong>Daily image:</strong> {imageData.title}
                        </h2>
                    </div>
                    <img
                        className="w-full mx-auto rounded-lg mb-12 "
                        src={imageData.url}
                        alt="Some thing"
                    />
                    <div className="container mx-auto flex pr-48 py-10 text-left">
                        <p className="w-1/3 inline-block flex-1 bg-orange-300 text-2xl font-bold pl-5 pt-5">
                            {imageData.title}
                        </p>
                        <p className="w-2/3 text-2xl font-light mx-auto px-16 pt-5 ">
                            {imageData.explanation}
                        </p>
                    </div>
                </div>
            );
        }
    }
}
export default Image;
