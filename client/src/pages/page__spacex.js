import React from 'react'
import SpacexLaunches from "../components/SpacexLaunches";
import spaceXLaunch from "../img/spaceXLaunch.jpg";


function page__articles() {
   return (
      <div className="container mx-auto pt-12">
         <div className="9/12 mx-auto">
            <div className="w-9/12 mx-auto">
               <h1 className="w-3/4">Space-X</h1>
            </div>
            <p className="p w-9/12 mx-auto block">
               SpaceX designs, manufactures and launches advanced rockets and
               spacecraft. The company was founded in 2002 to revolutionize
               space technology, with the ultimate goal of enabling people to
               live on other planets.
            </p>

            <div className="w-9/12 mx-auto mt-8 mb-12">
               <span className="inline-block bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  HQ City: Hawthorne - California
               </span>
               <span className="inline-block bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  Address: Rocket Road
               </span>
            </div>
            <img
               className="container mx-auto mb-16"
               src={spaceXLaunch}
               alt="Moon Landing"
            />
         </div>
         <div className="w-9/12 mx-auto">
            <h2 className="w-3/4">Launches</h2>
            <SpacexLaunches />
         </div>
      </div>
   );
}

export default page__articles;
