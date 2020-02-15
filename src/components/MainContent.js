import React from "react";
import img from "../img/space.jpg";

function MainContent() {
  return (
    <div>
      <h1 className="text-6xl text-white bg-black font-semibold leading-none pl-64">
        Photo of the day
      </h1>
      <div className="bg-black pb-32 pt-6">
        <div className="bg-white pl-20 pt-64 pb-64 container mx-auto rounded-lg"></div>
      </div>

      <h1 className="text-6xl text-w font-semibold leading-none mb-5 w-3/4">
        The header
      </h1>

      <div className="bg-white py-32">
        <div className="bg-black text-white pl-20 pt-32 pb-40 container mx-auto rounded-lg">
          <h3 className="text-2xl font-light leading-tight">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
            sed sequi quaerat.
          </h3>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
