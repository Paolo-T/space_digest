import React, { Component } from "react";
import VideoFeatured from "./VideoFeatured";
import Loader from "./Loader";
import { SRLWrapper } from "simple-react-lightbox";
class Media extends Component {
   constructor(props) {
      super(props);
      this.state = {
         error: null,
         isLoaded: false,
         mediaData: null
      };
   }
   async componentDidMount() {
      await fetch("/api/images/image")
         .then(res => res.json())
         .then(mediaData => {
            this.setState(
               {
                  isLoaded: true,
                  mediaData: {
                     date: mediaData.date,
                     title: mediaData.title,
                     explanation: mediaData.explanation,
                     url: mediaData.url,
                     hdurl: mediaData.hdurl,
                     media_type: mediaData.media_type
                  }
               },
               () => console.log("Media fetched! --->>>", mediaData)
            );
         })
         .catch(error => console.error("Error:", error));
   }

   render() {
      const { error, isLoaded, mediaData } = this.state;
      if (error) {
         return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
         return (
            <div className="container mx-auto text-center">
               <Loader className="inline-block" />
            </div>
         );
      } else if (mediaData.media_type !== "video") {
         return (
            <div className="container w-full mx-auto text-left mt-20 mb-10">
               <div className="flex text-left">
                  <h2 className="mx-auto mb-10">Astronomy picture of today</h2>
               </div>
               <SRLWrapper>
                  <a href={mediaData.url} data-attribute="SRL">
                     <img
                        className="w-full mx-auto mb-12 rounded-sm"
                        src={mediaData.url}
                        alt="Media from space"
                     />
                  </a>
               </SRLWrapper>

               <div className="container mx-auto flex pr-30 mb-10 mt-10 text-left">
                  <h2 className="w-1/3 inline-block flex-1 bg-teal-300 rounded-sm py-5 px-5">
                     {mediaData.title}
                  </h2>
                  <p className="w-2/3 text-2xl font-light mx-auto px-16">
                     {mediaData.explanation}
                  </p>
               </div>
            </div>
         );
      } else {
         return (
            <div className="container mx-auto text-center">
               <div className="flex justify-center">
                  <h2 className="text-2xl mb-2 uppercase">Daily image</h2>
               </div>
               <VideoFeatured url={mediaData.url} />
               <div className="container mx-auto flex pr-48 py-10 text-left">
                  <p className="w-1/3 inline-block flex-1 bg-gray-100 rounded-md text-2xl font-bold pl-5 pr-5 pt-5">
                     {mediaData.title}
                  </p>
                  <p className="w-2/3 text-2xl font-light mx-auto px-16 pt-5 ">
                     {mediaData.explanation}
                  </p>
               </div>
            </div>
         );
      }
   }
}
export default Media;
