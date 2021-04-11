import React from "react";

import { ConsoleTemplate } from "./Template";
import MeasureAndRender from "../MeasureAndRender";

import "./Console.css";

export default function Console({ color, children }) {
    return (
        <MeasureAndRender className="Console">
            <ConsoleTemplate color={color}>{children}</ConsoleTemplate>
        </MeasureAndRender>
    );
}
