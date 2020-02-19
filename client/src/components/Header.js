import React from "react";

function Header() {
    return (
        <header className="container mx-auto text-black text-center">
            <div className="flex justify-between items-center pt-8">
                <h3>Space</h3>
                <h3>Digest</h3>
            </div>

            <div className="mb-20">
                <h1 className="inline-block 7/12 mx-auto text-7xl font-semibold leading-none mt-16 mb-10 bg-teal-300">
                    Space digest.
                </h1>
                <h2 className="w-3/4 mx-auto text-3xl ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorum quos non harum quasi animi, natus itaque deleniti,
                    eligendi placeat voluptate fuga commodi officiis ad unde?
                    Tempore ipsa error praesentium architecto.
                </h2>
            </div>
        </header>
    );
}

export default Header;
