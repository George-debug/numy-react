import React from "react";

import { ButtonsFunctionsProvider } from "./ButtonsFunctionsProvider";
import Console from "./Console";
import Games from "./Games";
import "./App.css";

const App = () => {
    const CurrentGame = Games[0];

    return (
        <ButtonsFunctionsProvider>
            <Console color="#107091">
                <CurrentGame />
            </Console>
        </ButtonsFunctionsProvider>
    );
};

export default App;
