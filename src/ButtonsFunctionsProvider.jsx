import React, { useState, createContext } from "react";

const ButtonsFunctionsContext = createContext();

const nullFunc = () => null;
const consoleButton = (name, action) => ({ name, action });

const initialButtons = {
    small: [
        consoleButton("Restart", nullFunc),
        consoleButton("Levels", nullFunc),
        consoleButton("Games", nullFunc),
        consoleButton("On/Off", nullFunc),
    ],
    medium: {
        left: consoleButton("", nullFunc),
        up: consoleButton("", nullFunc),
        right: consoleButton("", nullFunc),
        down: consoleButton("", nullFunc),
    },
    big: consoleButton("", nullFunc),
};

const objIsEmpty = (obj) =>
    obj && Object.keys(obj).length === 0 && obj.constructor === Object;

const unifySegment = (mainSegment, namesSegment, actionsSegment) => {
    if (objIsEmpty(namesSegment) && objIsEmpty(actionsSegment)) return;
    if (mainSegment.action !== undefined) {
        mainSegment.action = actionsSegment ?? mainSegment.action;
        mainSegment.name = namesSegment ?? mainSegment.name;
        return;
    }
    //console.log("mainSegment", mainSegment);
    //console.log("namesSegment", namesSegment);
    //console.log("actionsSegment", actionsSegment);
    Object.entries(mainSegment).forEach(([key, nextSegment]) => {
        unifySegment(
            nextSegment,
            namesSegment[key] ?? {},
            actionsSegment[key] ?? {}
        );
    });
};

const unifyButtons = (newNames, newActions) => {
    var newButtons = { ...initialButtons };

    unifySegment(newButtons, newNames, newActions);
    //console.log(newButtons);

    return newButtons;
};

function ButtonsFunctionsProvider({ children }) {
    const [buttons, setButtons] = useState(initialButtons);

    const changeButtons = (newNames, newActions) =>
        setButtons(unifyButtons(newNames, newActions));

    return (
        <ButtonsFunctionsContext.Provider value={[buttons, changeButtons]}>
            {children}
        </ButtonsFunctionsContext.Provider>
    );
}

export { ButtonsFunctionsContext, ButtonsFunctionsProvider };
