import React, { useState, useContext, useEffect } from "react";
import Card from "./base/Card";
import spacex from "../img/spacex.png";
import { useTrail, animated } from "react-spring";

function Patches({ items }) {
    const springConfig = { mass: 5, tension: 2000, friction: 200 };
    const [animationReset, setAnimationReset] = useState(false);

    const trail = useTrail(items.length, {
        springConfig,
        from: { opacity: 0, y: 150 },
        to: { opacity: 1, y: 0 },
        reset: animationReset
    });

    useEffect(() => {
        setAnimationReset(true);
    });

    return (
        <ul className="container mx-auto grid gap-6 md:grid-cols-4 mb-12 cursor-pointer">
            {trail.map(({ y, opacity }, i) => {
                const item = items[i];

                return (
                    <animated.li
                        key={item.name}
                        style={{
                            opacity: opacity.interpolate(
                                opacity => `${opacity}`
                            ),
                            transform: y.interpolate(
                                y => `translate3d(0,${y}px,0)`
                            )
                        }}
                    >
                        <Card
                            link={`/space-x/launch/${item.name}`}
                            image={item.patch ? item.patch : spacex}
                            title={item.name}
                            tag1={item.flight_number}
                            tag2={item.rocket}
                            tag3={item.year}
                        />
                    </animated.li>
                );
            })}
        </ul>
    );
}

export default Patches;
