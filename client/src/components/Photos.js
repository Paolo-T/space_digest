import React from "react";
import { animated, useSprings } from "react-spring";

function Patches({ items }) {
    const springConfig = { mass: 3, tension: 3000, friction: 100 };

    const springs = useSprings(
        items.length,
        items.map((item, i) => ({
            springConfig,
            from: { opacity: 0, scale: 0.9 },
            to: { opacity: 1, scale: 1 },
            delay: i * 70
        }))
    );

    return (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-3 object-cover mt-10">
            {springs.map(({ scale, opacity }, i) => {
                const item = items[i];

                return (
                    <animated.img
                        src={item.href}
                        key={item.href}
                        className="object-cover object-center h-74 w-full rounded-md col-span-1 bg-gray-200"
                        style={{
                            opacity: opacity.interpolate(
                                opacity => `${opacity}`
                            ),
                            transform: scale.interpolate(
                                scale => `scale(${scale})`
                            )
                        }}
                    />
                );
            })}
        </div>
    );
}

export default Patches;
