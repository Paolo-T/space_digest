import React from "react";
import { Link } from "react-router-dom";
import SimpleReactLightbox from "simple-react-lightbox";
import Header from "../components/Header";
import Media from "../components/Media";
import FiftyFifty from "../components/base/FiftyFifty";
import curiosityRover from "../img/curiosityRover.jpg";

function page__home() {
    return (
        <div className="container mx-auto pt-12 pb-12">
            <Header />
            {/* <div className="container w-9/12 mx-auto flex">
                    <Card image={spacex} />
                    <Card image={spacex} />
                </div> */}

            <FiftyFifty
                image="https://images2.imgbox.com/89/bc/JcbcvuBI_o.png"
                title="Asteroids"
                text=" NeoWs (Near Earth Object Web Service) is a web service for
                    near earth Asteroid information. With NeoWs we can display
                    Asteroids based on their closest approach date to Earth."
                btn_text="Asteroids nearby"
                link="/asteroids"
            />

            <SimpleReactLightbox>
                <Media />
            </SimpleReactLightbox>

            <FiftyFifty
                image="https://images2.imgbox.com/89/bc/JcbcvuBI_o.png"
                title="Photo collection"
                text="Collection of images from NASA's image library."
                btn_text=" Photos"
                link="/photo-collection"
            />

            <FiftyFifty
                reverse={true}
                image="https://images2.imgbox.com/89/bc/JcbcvuBI_o.png"
                title="Mars Rover"
                text="Spirit and Opportunity landed on Mars January 3 and January 24, 2004 PST (Jan. 4 and Jan. 25 UTC).
                Both rovers lived well beyond their planned 90-day missions. Spirit and Opportunity each found evidence for past wet conditions that possibly could have supported microbial life."
                btn_text="Rover pictures from Mars"
                link="/nasa"
            />

            <FiftyFifty
                image="https://images2.imgbox.com/89/bc/JcbcvuBI_o.png"
                title="SpaceX"
                text="SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to liv on other planets.."
                btn_text="More about SpaceX"
                link="/space-x"
            />
        </div>
    );
}

export default page__home;
