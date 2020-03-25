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
            <div className="container w-full mx-auto mt-20 mb-10">
               <div className="container mx-auto flex pr-30 mb-6 mt-10 text-left">
                  <div className="w-9/12 mx-auto">
                     <h2 className="">Astronomy picture of today</h2>
                     <h2 className="p">{mediaData.title}</h2>
                     <SRLWrapper>
                        <a href={mediaData.url} data-attribute="SRL">
                           <img
                              className="w-full mx-auto mb-12 rounded-sm cursor-pointer"
                              src={mediaData.url}
                              alt="Astronomy picture of today"
                           />
                        </a>
                     </SRLWrapper>
                  </div>
               </div>

               <div className="container mx-auto pr-30 mb-10 mt-10 text-left">
                  <div className="w-9/12 mx-auto">
                     <h2 className="w-2/3 inline-block flex-1 rounded-sm">
                        {mediaData.title}
                     </h2>
                     <p className="text-2xl font-light mx-auto pr-16">
                        {mediaData.explanation}
                     </p>
                  </div>
               </div>
            </div>
         );
      } else {
         return (
            <div className="container mx-auto text-center mt-10">
               <div className="flex justify-center">
                  <h2 className="text-2xl mb-2 uppercase">
                     Astronomy Video of today
                  </h2>
               </div>

               <VideoFeatured url={mediaData.url} />
               <div className="w-3/12 pt-6 text-base">
                  <h3 className="text-base pt-2">VIDEO __</h3>
               </div>

               <div className="w-9/12">
                  <div className="container mx-auto flex pr-48 py-10 text-left">
                     <p className="w-1/3 inline-block flex-1 bg-gray-100 rounded-md text-2xl font-bold pl-5 pr-5 pt-5">
                        {mediaData.title}
                     </p>
                     <p className="w-2/3 text-2xl font-light mx-auto px-16 pt-5 ">
                        {mediaData.explanation}
                     </p>
                  </div>
               </div>
            </div>
         );
      }
   }
}
export default Media;
