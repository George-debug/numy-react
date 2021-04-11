import React from "react";

import {
    Body,
    Screen,
    ArrowButtons,
    SmallButtons,
    BigButton,
    Diagonals,
} from "./ConsoleComps";

import slimLayout from "./slimLayout";
import squaredLayout from "./squaredLayout";
import wideLayout from "./wideLayout";

export function ConsoleTemplate({ size, color, children }) {
    const ratio = size.width / size.height;
    var layout, unit;

    if (ratio <= 0.8) {
        unit = Math.min(size.width / 26, size.height / 46);

        layout = slimLayout(size, unit);
    } else {
        unit = Math.min(size.width / 46, size.height / 26);

        layout =
            ratio <= 1.2 ? squaredLayout(size, unit) : wideLayout(size, unit);
    }

    return (
        <>
            <svg
                width={size.width}
                height={size.height}
                version="1.1"
                viewBox={`0 0 ${size.width} ${size.height}`}
            >
                <Body
                    right={layout.body.right}
                    bottom={layout.body.bottom}
                    Wide={layout.body.wide ?? false}
                    unit={unit}
                    color={color}
                />
                <Screen
                    left={layout.screen.left}
                    top={layout.screen.top}
                    right={layout.screen.right}
                    bottom={layout.screen.bottom}
                    unit={unit}
                    color={"#313131"}
                />
                <ArrowButtons
                    left={layout.arrowButtons.left}
                    top={layout.arrowButtons.top}
                    unit={unit}
                />
                <SmallButtons coords={layout.smallButtons.coords} unit={unit} />
                <BigButton
                    left={layout.bigButton.left}
                    top={layout.bigButton.top}
                    unit={unit}
                />
                <Diagonals
                    left={layout.diagonals.left}
                    top={layout.diagonals.top}
                    unit={unit}
                />
            </svg>
            <div
                className="screen"
                style={{
                    left: layout.screen.left + unit * 3,
                    top: layout.screen.top + unit * 3,
                    width: layout.screen.right - layout.screen.left - unit * 6,
                    height: layout.screen.bottom - layout.screen.top - unit * 6,
                }}
            >
                {React.cloneElement(React.Children.only(children), {
                    size: {
                        width:
                            layout.screen.right - layout.screen.left - unit * 6,
                        height:
                            layout.screen.bottom - layout.screen.top - unit * 6,
                    },
                })}
            </div>
        </>
    );
}
