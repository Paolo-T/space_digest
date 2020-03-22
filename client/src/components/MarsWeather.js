import React, { Component } from "react";
import Loader from "./Loader";
import marsLandscape from "../img/marsLandscape.jpg";

class MarsWeather extends Component {
   constructor(props) {
      super(props);
      this.state = {
         error: null,
         isLoaded: false,
         solData: null
      };
   }

   async componentDidMount() {
      await fetch("/api/marsWeather/weather")
         .then(res => res.json())
         .then(solData => {
            this.setState(
               {
                  error: null,
                  isLoaded: true,
                  solData
               },
               () => console.log("Weather fetched! --->>>", solData)
            );
         })
         .catch(error => console.error(error));
   }

   render() {
      const { error, isLoaded, solData } = this.state;
      if (error) {
         return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
         return (
            <div className="text-center">
               <Loader className="inline-block" />
            </div>
         );
      } else {
         return (
            <div>
               <h2 className="w-2/3 mx-auto text-center mb-10 mt-20">
                  News from Mars
               </h2>
               <div
                  // style={{ backgroundImage: `url(${marsLandscape})` }}
                  className="container mx-auto bg-gray-100 my-30 py-8 pl-8 bg-cover bg-top"
               >
                  <h3 className="mb-2">Latest Weather at Elysium Planitia</h3>
                  <p className="p inline-block">
                     InSight is taking daily weather measurements (temperature,
                     wind, pressure) on the surface of Mars at Elysium Planitia,
                     a flat, smooth plain near Mars’ equator.
                  </p>
                  <div className="mt-4">
                     <p className="block">
                        <strong>Sol</strong>{" "}
                        {solData[solData.length - 1].marsSol}
                     </p>
                     <p className="block">
                        <strong>Earth date:</strong> {solData[0].earth_date}
                     </p>
                     <p className="block">
                        <strong>Season:</strong> {solData[0].season}
                     </p>
                     <p>
                        <strong>high: </strong>
                        {solData[0].temperature.max}° F
                     </p>
                     <p>
                        <strong>low: </strong>
                        {solData[0].temperature.min}° F
                     </p>
                  </div>
                  <div className="container w-full flex mx-auto">
                     {solData.map(data => {
                        return (
                           <div className="flex-1 py-4" key={data.marsSol}>
                              <p>
                                 <strong>Sol: </strong>
                                 {data.marsSol}
                              </p>

                              <p>
                                 <strong>Earth date: </strong>
                                 {data.earth_date}
                              </p>
                              <p>
                                 <strong>high: </strong>
                                 {data.temperature.max}° F
                              </p>
                              <p>
                                 <strong>low: </strong>
                                 {data.temperature.min}° F
                              </p>
                           </div>
                        );
                     })}
                  </div>
               </div>
            </div>
         );
      }
   }
}

export default MarsWeather;
