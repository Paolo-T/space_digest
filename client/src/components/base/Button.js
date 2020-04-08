import React from "react";
import { Link } from "react-router-dom";

function Button(to, text) {
    return (
        <div>
            <button className="bg-transparent hover:bg-teal-300 text-black py-2 px-4 border border-black hover:border-transparent hover:border-black rounded mt-12">
                <Link className="block text-black text-2xl" to={to}>
                    {text}
                </Link>
            </button>
        </div>
    );
}

export default Button;
