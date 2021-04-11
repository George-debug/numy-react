import React, { useContext, useState } from "react";
import { useSpring, animated } from "react-spring";

import { ButtonsFunctionsContext } from "../../ButtonsFunctionsProvider";

const buttonConfig = { duration: 90 };
/*const buttonConfig = {
    mass: 0.5,
    tension: 500,
    friction: 14,
    clamp: true,
};*/
const useAlphaPush = (action) => {
    const [clicked, setClicked] = useState(false);

    const { alpha } = useSpring({
        alpha: clicked ? 1 : 0,
        config: buttonConfig,
    });

    const bind = {
        onMouseDown: () => {
            setClicked(true);
            action();
        },
        onMouseUp: () => setClicked(false),
        onMouseLeave: () => setClicked(false),
    };

    return { alpha, bind };
};

const Speaker = ({ left, top, unit }) => {
    return (
        <g>
            <g>
                <rect
                    x={left}
                    y={top + unit * 3}
                    width={unit}
                    height={unit}
                    fillOpacity=".5"
                />
                <rect
                    x={left}
                    y={top + unit * 5}
                    width={unit}
                    height={unit}
                    fillOpacity=".5"
                />

                <rect
                    x={left + unit * 2}
                    y={top + unit * 3}
                    width={unit}
                    height={unit}
                    fillOpacity=".5"
                />
                <rect
                    x={left + unit * 2}
                    y={top + unit * 5}
                    width={unit}
                    height={unit}
                    fillOpacity=".5"
                />
                <rect
                    x={left + unit * 2}
                    y={top + unit}
                    width={unit}
                    height={unit}
                    fillOpacity=".5"
                />

                <rect
                    x={left + unit * 4}
                    y={top + unit * 3}
                    width={unit}
                    height={unit}
                    fillOpacity=".5"
                />
                <rect
                    x={left + unit * 4}
                    y={top + unit}
                    width={unit}
                    height={unit}
                    fillOpacity=".5"
                />
            </g>
            <g>
                <rect
                    x={left + unit}
                    y={top + unit * 2}
                    width={unit}
                    height={unit}
                    fillOpacity=".1"
                />
                <rect
                    x={left + unit}
                    y={top + unit * 4}
                    width={unit}
                    height={unit}
                    fillOpacity=".1"
                />
                <rect
                    x={left + unit * 3}
                    y={top}
                    width={unit}
                    height={unit}
                    fillOpacity=".1"
                />
                <rect
                    x={left + unit * 3}
                    y={top + unit * 2}
                    width={unit}
                    height={unit}
                    fillOpacity=".1"
                />
                <rect
                    x={left + unit * 3}
                    y={top + unit * 4}
                    width={unit}
                    height={unit}
                    fillOpacity=".1"
                />
            </g>
        </g>
    );
};

export const Body = (props) => {
    const { right, bottom, unit } = props;
    const coloredPath = `
        m0 ${unit} h${unit} v-${unit} H${right - unit} v${unit} H${right}
        V${bottom - 4 * unit} h-${unit} v${unit} h-${unit} v${unit}
        h-${unit} v${unit} h-${unit} v${unit} H${unit} v-${unit} h-${unit}z
    `;

    return (
        <g>
            <path fill={props.color} d={coloredPath} />

            <rect
                x={unit}
                y={0}
                width={right - unit * 2}
                height={unit}
                fillOpacity="0.3"
            />
            <rect
                x={right - unit}
                y={unit}
                width={unit}
                height={bottom - unit * 5}
                fillOpacity="0.3"
            />
            <rect
                x={0}
                y={unit}
                width={unit}
                height={bottom - unit * 2}
                fillOpacity="0.3"
            />
            <rect
                x={unit}
                y={bottom - unit}
                width={right - unit * 5}
                height={unit}
                fillOpacity="0.3"
            />
            <rect
                x={right - unit * 2}
                y={bottom - unit * 4}
                width={unit}
                height={unit}
                fillOpacity="0.3"
            />
            <rect
                x={right - unit * 3}
                y={bottom - unit * 3}
                width={unit}
                height={unit}
                fillOpacity="0.3"
            />
            <rect
                x={right - unit * 4}
                y={bottom - unit * 2}
                width={unit}
                height={unit}
                fillOpacity="0.3"
            />
            <path
                fillOpacity="0.3"
                d={
                    props.Wide || props.wide
                        ? `m${unit * 3} ${unit} v${unit * 3} h-${unit * 2}
                          v${unit} h${unit * 2} V${bottom - unit * 5}
                          h-${unit * 2} v${unit} h${unit * 2} V${bottom - unit}
                          h${unit} V${unit}
                          `
                        : `m${unit} ${unit * 3} h${unit * 3} v-${unit * 2}
                          h${unit} v${unit * 2} H${right - unit * 5}
                          v-${unit * 2} h${unit} v${unit * 2}
                          H${right - unit} v${unit} H${unit}z`
                }
            />
            <Speaker
                left={right - unit * 7}
                top={bottom - unit * 8}
                unit={unit}
            />
        </g>
    );
};

export const Screen = ({ left, top, right, bottom, color, unit }) => {
    const coloredPath = `
        M${left} ${top + unit} h${unit} v-${unit} H${right - unit}
        v${unit} h${unit} V${bottom - unit * 3} h-${unit} v${unit}
        h-${unit} v${unit} h-${unit} v${unit} H${left + unit} v-${unit}
        h-${unit}
    `;

    return (
        <g>
            <path fill={color} d={coloredPath}></path>
            <rect
                x={left}
                y={top + unit}
                width={unit}
                height={bottom - top - unit * 2}
                fillOpacity="0.3"
            />
            <rect
                x={left + unit}
                y={top}
                width={right - left - unit * 2}
                height={unit}
                fillOpacity="0.3"
            />
            <rect
                x={right - unit}
                y={top + unit}
                width={unit}
                height={bottom - top - unit * 4}
                fillOpacity="0.3"
            />
            <rect
                x={right - unit * 2}
                y={bottom - unit * 3}
                width={unit}
                height={unit}
                fillOpacity="0.3"
            />
            <rect
                x={right - unit * 3}
                y={bottom - unit * 2}
                width={unit}
                height={unit}
                fillOpacity="0.3"
            />
            <rect
                x={left + unit}
                y={bottom - unit}
                width={right - left - unit * 4}
                height={unit}
                fillOpacity="0.3"
            />
        </g>
    );
};

const SmallButton = ({ left, top, unit, action }) => {
    const length = unit * 2;

    const { alpha, bind } = useAlphaPush(action);

    return (
        <g {...bind}>
            <rect
                x={left}
                y={top}
                width={length}
                height={unit * 2}
                fillOpacity="0"
            />
            <animated.rect
                x={left}
                y={alpha.interpolate((a) => top + unit * 1.5 - (unit / 2) * a)}
                width={length}
                height={unit / 2}
                fillOpacity="0.1"
            />
            <rect
                x={left}
                y={top + unit / 2}
                width={length}
                height={unit}
                fill="#faaf00"
            />
            <rect
                x={left}
                y={top + unit / 2}
                width={length}
                height={unit}
                fillOpacity="0.3"
            />
            <animated.rect
                x={left}
                y={alpha.interpolate((a) => top + (unit / 2) * a)}
                width={length}
                height={unit}
                fill="#faaf00"
            />
        </g>
    );
};

export const SmallButtons = ({ unit, coords }) => {
    const [{ small }] = useContext(ButtonsFunctionsContext);
    //console.log(small);
    return (
        <g>
            {coords.map((coord, i) => (
                <SmallButton
                    key={i}
                    left={coord[0]}
                    top={coord[1]}
                    unit={unit}
                    action={small[i].action}
                />
            ))}
        </g>
    );
};

const ButtonShadow = animated(({ left, top, right, unit, alpha }) => {
    return (
        <g>
            <rect
                x={left}
                y={top}
                width={unit / 2}
                height={unit / 2}
                fillOpacity={alpha}
            />
            <rect
                x={left + unit / 2}
                y={top + unit / 2}
                width={right - left - unit}
                height={unit / 2}
                fillOpacity={alpha}
            />
            <rect
                x={right - unit / 2}
                y={top}
                width={unit / 2}
                height={unit / 2}
                fillOpacity={alpha}
            />
        </g>
    );
});

const Button = ({ left, top, width, height, unit, action }) => {
    const color = "#faaf00";

    const halfUnit = unit / 2;

    const underPath = `m${left} ${top + width - unit} h${width} v${unit}
    h-${halfUnit} v${halfUnit} H${left + halfUnit}
    v-${halfUnit} h-${halfUnit}z`;

    const { alpha, bind } = useAlphaPush(action);

    return (
        <g className="button" {...bind}>
            <ButtonShadow
                left={left}
                top={alpha.interpolate((a) => top + height - (unit / 2) * a)}
                right={left + width}
                unit={unit}
                alpha={0.1}
            />
            <path fill={color} d={underPath} />
            <path fillOpacity="0.3" d={underPath} />

            <animated.g
                style={{
                    transform: alpha.interpolate(
                        (a) => `translatey(${(unit / 2) * a}px)`
                    ),
                }}
            >
                <rect
                    x={left}
                    y={top + unit / 2}
                    width={width}
                    height={height - unit}
                    fill={color}
                />
                <rect
                    x={left}
                    y={top + unit / 2}
                    width={width}
                    height={height - unit}
                    fillOpacity="0.1"
                />
                <rect
                    x={left + unit / 2}
                    y={top}
                    width={width - unit}
                    height={height}
                    fill={color}
                />
            </animated.g>
        </g>
    );
};

export const ArrowButtons = ({ left, top, unit }) => {
    const [{ medium }] = useContext(ButtonsFunctionsContext);

    //console.log(medium);

    return (
        <g>
            <Button
                left={left}
                top={top + unit * 2.5}
                width={unit * 2.5}
                height={unit * 2.5}
                unit={unit}
                action={medium.left.action}
            />
            <Button
                left={left + unit * 2.5}
                top={top}
                width={unit * 2.5}
                height={unit * 2.5}
                unit={unit}
                action={medium.up.action}
            />
            <Button
                left={left + unit * 5}
                top={top + unit * 2.5}
                width={unit * 2.5}
                height={unit * 2.5}
                unit={unit}
                action={medium.right.action}
            />
            <Button
                left={left + unit * 2.5}
                top={top + unit * 5}
                width={unit * 2.5}
                height={unit * 2.5}
                unit={unit}
                action={medium.down.action}
            />
        </g>
    );
};

export const BigButton = ({ left, top, unit }) => {
    const [{ big }] = useContext(ButtonsFunctionsContext);
    //console.log(big);
    return (
        <Button
            left={left}
            top={top}
            width={unit * 4}
            height={unit * 4}
            unit={unit}
            action={big.action}
        />
    );
};

const Diagonal = ({ left, top, unit, alpha }) => {
    return (
        <g>
            <rect
                x={left + unit * 2}
                y={top}
                width={unit}
                height={unit}
                fillOpacity={alpha}
            />
            <rect
                x={left + unit}
                y={top + unit}
                width={unit}
                height={unit}
                fillOpacity={alpha}
            />
            <rect
                x={left}
                y={top + unit * 2}
                width={unit}
                height={unit}
                fillOpacity={alpha}
            />
        </g>
    );
};

export const Diagonals = ({ left, top, unit }) => {
    return (
        <g>
            <Diagonal left={left} top={top} unit={unit} alpha={0.5} />
            <Diagonal left={left + unit} top={top} unit={unit} alpha={0.1} />
            <Diagonal
                left={left + unit * 3}
                top={top}
                unit={unit}
                alpha={0.5}
            />
            <Diagonal
                left={left + unit * 4}
                top={top}
                unit={unit}
                alpha={0.1}
            />
        </g>
    );
};
