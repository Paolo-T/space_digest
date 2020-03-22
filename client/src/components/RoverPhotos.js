import React, { Component } from "react";
import Loader from "./Loader";
import { SRLWrapper } from "simple-react-lightbox";
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
      await fetch("api/marsRover/curiosity/manifest")
         .then(res => res.json())
         .then(sols_with_photos => {
            const random_index = Math.floor(
               Math.random() * sols_with_photos.length
            );
            return sols_with_photos[random_index].sol;
         })
         .then(random_sol => {
            fetch(`api/marsRover/curiosity/photos/${random_sol}`)
               .then(res => res.json())
               .then(photos => {
                  this.setState(
                     {
                        isLoaded: true,
                        photos
                     },
                     () => console.log("Photos fetched! --->>>", photos)
                  );
               });
         })
         .catch(error => console.error("Error:", error));
   }

   render() {
      const { error, isLoaded, photos } = this.state;
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
            <div className="container w-full mx-auto text-left my-8">
               <div className="container mx-auto flex pr-30 py-10 text-left">
                  <h2 className="w-1/3 inline-block flex-1 bg-teal-300 rounded-sm text-5xl font-bold pl-5 pt-5">
                     Mars Rover
                  </h2>

                  <p className="w-2/3 text-2xl font-light mx-auto px-16 pt-5">
                     Spirit and Opportunity landed on Mars January 3 and January
                     24, 2004 PST (Jan. 4 and Jan. 25 UTC). Both rovers lived
                     well beyond their planned 90-day missions. Opportunity
                     worked nearly 15 years on Mars and broke the driving record
                     for putting the most miles on the odometer. The twin
                     geologists, Spirit and Opportunity, have both found
                     dramatic evidence that: Long ago Mars was wetter Conditions
                     at Mars could have sustained microbial life, if any existed
                     With data from the rovers, mission scientists have
                     reconstructed an ancient past when Mars was awash in water.
                     Spirit and Opportunity each found evidence for past wet
                     conditions that possibly could have supported microbial
                     life.
                  </p>
               </div>

               <h2 className="w-2/3 mx-auto text-center mb-10 mt-20">
                  Shots from Curiosity Mars rover<br></br>(Mast camera)
               </h2>
               <SRLWrapper>
                  <div className="container grid gap-6 grid-cols-5">
                     {photos.map(photo => {
                        return (
                           <img
                              className="w-full rounded-md cursor-pointer"
                              src={photo.img_src}
                              key={photo.id}
                              alt="Scene from Mars Rover"
                           />
                        );
                     })}
                  </div>
               </SRLWrapper>
            </div>
         );
      }
   }
}
export default RoverPhotos;
