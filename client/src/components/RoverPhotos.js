import React, { Component } from "react";
class RoverPhotos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            roverImages: null
        };
    }
    async componentDidMount() {
        await fetch("/rover/curiosity/photos")
            .then(res => res.json())
            .then(sols_with_photos => {
                const random_index = Math.floor(
                    Math.random() * sols_with_photos.length
                );
                return sols_with_photos[random_index].sol;
            })
            .then(random_sol => {
                fetch(`/rover/curiosity/photo/${random_sol}`)
                    .then(res => res.json())
                    .then(photos => {
                        this.setState({
                            isLoaded: true,
                            photo: photos[0]
                        });
                    });
            })
            .catch(error => console.error("Error:", error));
    }

    render() {
        const { error, isLoaded, roverImage } = this.state;
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
                <div className="container mx-auto text-center mt-7">
                    <div className="w-full">
                        <h2 className="text-5xl mb-2 font-bold uppercase">
                            {/* {roverImage.name} */}
                        </h2>
                        <p className="w-2/3 inline-block text-2xl pt-5 mb-7">
                            Spirit and Opportunity landed on Mars January 3 and
                            January 24, 2004 PST (Jan. 4 and Jan. 25 UTC). Both
                            rovers lived well beyond their planned 90-day
                            missions. Opportunity worked nearly 15 years on Mars
                            and broke the driving record for putting the most
                            miles on the odometer. The twin geologists, Spirit
                            and Opportunity, have both found dramatic evidence
                            that: Long ago Mars was wetter Conditions at Mars
                            could have sustained microbial life, if any existed
                            With data from the rovers, mission scientists have
                            reconstructed an ancient past when Mars was awash in
                            water. Spirit and Opportunity each found evidence
                            for past wet conditions that possibly could have
                            supported microbial life.
                        </p>
                    </div>
                    {/* {this.state.roverImages.map(image => {
                        return (
                            <div className="container mx-auto flex pr-48 py-10 text-left">
                                <img
                                    className="w-1/3 rounded-lg mb-12 "
                                    src={roverImage.img_src}
                                    alt="Mars Rover photo"
                                />
                            </div>
                        );
                    })} */}
                </div>
            );
        }
    }
}
export default RoverPhotos;
