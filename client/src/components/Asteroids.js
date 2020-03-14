import React, { Component } from "react";
import Loader from "./Loader";

class Asteroids extends Component {
   constructor(props) {
      super(props);
      this.state = {
         error: null,
         isLoaded: false,
         processedResponse: null
      };
   }
   async componentDidMount() {
      await fetch("/api/asteroids/:id")
         .then(res => res.json())
         .then(processedResponse => {
            this.setState(
               {
                  error: null,
                  isLoaded: true,
                  processedResponse
               },
               () => console.log("Asteroids fetched! --->>>", processedResponse)
            );
         })
         .catch(error => console.error("Error:", error));
   }

   render() {
      const { error, isLoaded, processedResponse } = this.state;
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
            <div className="container w-3/4 mx-auto text-left my-8">
               <div className="container mx-auto flex pr-30 pt-5 text-left">
                  <h2 className="w-1/3 inline-block flex-1 bg-gray-100 text-5xl leading-snug font-bold pl-5 py-5">
                     Space Rocks. Near Earth Asteroids
                  </h2>

                  <p className="w-2/3 text-2xl font-light mx-auto px-16">
                     NeoWs (Near Earth Object Web Service) is a RESTful web
                     service for near earth Asteroid information.
                     <br></br>
                     With NeoWs we can display Asteroids based on their closest
                     approach date to Earth.
                  </p>
               </div>
               <div className="container mx-auto flex pr-30 pb-10 text-left">
                  <div className="w-1/3 inline-block flex-1 text-5xl font-bold pl-5"></div>
                  <div className="w-2/3">
                     <h2 className="inline-block text-5xl font-bold pl-16">
                        Asteroid name
                     </h2>
                     <div className="mx-auto px-16 pt-5text-2xl font-light ">
                        {processedResponse.map(response => {
                           return (
                              <ul class="flex mb-4">
                                 <li
                                    class="w-1/4 bg-gray-500 h-12 pl-2 pt-2"
                                    key={response.id}
                                 >
                                    {response.name}
                                 </li>
                                 <li
                                    class="w-1/4 bg-gray-400 h-12 pl-2 pt-2"
                                    key={response.id}
                                 >
                                    {response.diameter}
                                 </li>
                                 <li
                                    class="w-1/4 bg-gray-500 h-12 pl-2 pt-2"
                                    key={response.id}
                                 >
                                    {response.speed}
                                 </li>
                                 <li
                                    class="w-1/4 bg-gray-400 h-12 pl-2 pt-2"
                                    key={response.id}
                                 >
                                    {response.miss_distance}
                                 </li>
                              </ul>
                           );
                        })}
                     </div>
                  </div>
               </div>
            </div>
         );
      }
   }
}
export default Asteroids;
