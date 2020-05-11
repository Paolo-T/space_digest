import React from "react";
import { animated, useSprings } from "react-spring";
import { SRLWrapper } from "simple-react-lightbox";

function Patches({ items }) {
    const spring = { mass: 2, tension: 1000, friction: 50 };

    const springs = useSprings(
        items.length,
        items.map((item, i) => ({
            config: spring,
            from: {
                opacity: 0,
                transform: `scale(0.9) translate3d(0,1rem,0)`
            },
            to: {
                opacity: 1,
                transform: `scale(1) translate3d(0,0rem,0)`
            },
            delay: i * 100
        }))
    );

    return (
        <SRLWrapper>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-3 object-cover mt-10 cursor-pointer">
                {springs.map((props, i) => {
                    const item = items[i];

                    return (
                        <animated.img
                            src={item.href}
                            key={item.href}
                            className="object-cover object-center h-74 w-full rounded-md col-span-1 bg-gray-200"
                            style={props}
                        />
                    );
                })}
            </div>
        </SRLWrapper>
    );
}

export default Patches;
