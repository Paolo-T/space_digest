import React from 'react'
import moonlanding from "../img/moonlanding.jpg";

function page__articles() {
   return (
      <div className="container mx-auto pt-12">
         <div className="-9/12 mx-auto">
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
         </div>
         <div className="w-9/12 mx-auto">
            <h2 className="w-3/4">Launches</h2>
         </div>
         <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img
               class="w-full"
               src={moonlanding}
               alt="Sunset in the mountains"
            />
            <div class="px-6 py-4">
               <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
               <p class="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
               </p>
            </div>
            <div class="px-6 py-4">
               <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  #photography
               </span>
               <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  #travel
               </span>
               <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                  #winter
               </span>
            </div>
         </div>
      </div>
   );
}

export default page__articles;
