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
            <div className="container w-full">
               <SRLWrapper>
                  <div className="grid gap-6 grid-cols-4">
                     {photos.map(photo => {
                        return (
                           <img
                              className="w-full rounded-sm cursor-pointer"
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
