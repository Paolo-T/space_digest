import React from "react";
import img from "../img/space.jpg";

function MainContent() {
  return (
    <div className="bg-white text-white">
      <section className="container mx-auto relative bg-gray-800 bg-auto bg-center">
        <div className="pl-20 pt-32 pb-40 w-1/2">
          <h1 className="text-6xl font-semibold leading-none mb-5">
            The header goes here
          </h1>
          <h3 className="text-2xl font-light leading-tight">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
            sed sequi quaerat.
          </h3>
        </div>
      </section>

      <section className="bg-gray-100 mt-32">
        <div className="pl-20 pt-32 pb-40 w-1/2">
          <h1 className="text-6xl font-semibold leading-none mb-5">
            The header goes here
          </h1>
          <h3 className="text-2xl font-light leading-tight">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
            sed sequi quaerat.
          </h3>
        </div>
      </section>

      <section className="bg-gray-800 mt-32 mb-40">
        <div className="pl-20 pt-32 pb-40 w-1/2">
          <h1 className="text-6xl font-semibold leading-none mb-5">
            The header goes here
          </h1>
          <h3 className="text-2xl font-light leading-tight">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
            sed sequi quaerat.
          </h3>
        </div>
      </section>
    </div>
  );
}

export default MainContent;
