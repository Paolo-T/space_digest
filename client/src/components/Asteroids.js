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
            <div className="container w-full mx-auto text-left my-8">
               <div className="container mx-auto flex pr-30 pt-5 text-left">
                  <h2 className="w-1/3 inline-block flex-1 bg-gray-100 text-5xl leading-snug font-bold pl-5 py-5 mb-5">
                     Space Rocks. Near Earth Asteroids
                  </h2>

                  <p className="w-2/3 text-2xl font-light mx-auto px-16 pt-10">
                     NeoWs (Near Earth Object Web Service) is a web service for
                     near earth Asteroid information.
                     <br></br>
                     With NeoWs we can display Asteroids based on their closest
                     approach date to Earth.
                     <span className="block pt-8 text-base font-light">
                        <a
                           className=""
                           target="_blank"
                           href="https://cneos.jpl.nasa.gov/"
                        >
                           CNEOS - Center for Near Earth Object Studies
                        </a>
                     </span>
                  </p>
               </div>
               <div className="container mx-auto flex pr-30 pb-10 mt-32 text-left">
                  <div className="w-4/5 mx-auto">
                     <h3 className="inline-block text-3xl font-bold mb-10 pl-4">
                        Near Miss! Asteroids passing close to Earth this month
                     </h3>
                     <div className="flex pt-4 pl-4">
                        <span className="w-1/4 font-bold">Name</span>
                        <span className="w-1/4 font-bold">Approach Date</span>
                        <span className="w-1/4 font-bold">
                           Diameter (Meter)
                        </span>
                        <span className="w-1/4 font-bold">
                           Speed (Km/second)
                        </span>
                        <span className="w-1/4 font-bold">
                           Distance from Earth (km)
                        </span>
                     </div>

                     <div className="mx-auto pt-5 text-1xl font-light ">
                        {processedResponse.map(response => {
                           return (
                              <ul className="flex mb-3">
                                 <li
                                    className="w-1/5 bg-gray-200 h-12 pl-4 pt-4"
                                    key={response.id}
                                 >
                                    {response.name}
                                 </li>
                                 <li
                                    className="w-1/5 bg-gray-100 h-12 pl-4 pt-4"
                                    key={response.id}
                                 >
                                    {response.approach_date}
                                 </li>
                                 <li
                                    className="w-1/5 bg-gray-200 h-12 pl-4 pt-4"
                                    key={response.id}
                                 >
                                    {response.diameter}
                                 </li>
                                 <li
                                    className="w-1/5 bg-gray-100 h-12 pl-4 pt-4"
                                    key={response.id}
                                 >
                                    {response.speed}
                                 </li>
                                 <li
                                    className="w-1/5 bg-gray-200 h-12 pl-4 pt-4"
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
