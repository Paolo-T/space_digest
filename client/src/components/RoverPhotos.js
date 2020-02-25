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
        await fetch("api/marsRover/rover-images")
            .then(res => res.json())
            .then(roverImages => {
                this.setState(
                    {
                        isLoaded: true,
                        img_src: roverImages.photo.img_src,
                        earth_date: roverImages.photo.earth_date,
                        rover: {
                            name: roverImages.photo.rover.name,
                            status: roverImages.photo.rover.status,
                            launch_date: roverImages.photo.rover.launch_date,
                            landing_date: roverImages.photo.rover.landing_date,
                            max_sol: roverImages.photo.rover.max_sol
                        }
                    },
                    () =>
                        console.log(
                            "Rover photos fetched! --->>>",
                            roverImages.photo.rover.status
                        )
                );
            })
            .catch(error => console.error("Error:", error));
    }

    render() {
        const { error, isLoaded, roverImages } = this.state;
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
                            The Adventure Twins
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
                    {/* {roverImages.map(image => {
                        <div className="container mx-auto flex pr-48 py-10 text-left">
                            <img
                                className="w-1/3 rounded-lg mb-12 "
                                src={roverImages.img_src}
                                alt="Mars Rover photo"
                            />
                        </div>;
                    })} */}
                </div>
            );
        }
    }
}
export default RoverPhotos;
