import { Component } from "react";
import { ButtonsFunctionsContext } from "../ButtonsFunctionsProvider";

export default class GameClass extends Component {
    static contextType = ButtonsFunctionsContext;

    linkButtons(names = {}) {
        const changeButtons = this.context[1];

        changeButtons(names, {
            ...((this.restart || this.levels) && {
                small: {
                    ...(this.restart && { 0: this.restart }),
                    ...(this.levels && { 0: this.levels }),
                },
            }),
            ...((this.left || this.right || this.up || this.down) && {
                medium: {
                    ...(this.left && { left: this.left }),
                    ...(this.up && { up: this.up }),
                    ...(this.right && { right: this.right }),
                    ...(this.down && { down: this.down }),
                },
            }),
            ...(this.big && { big: this.big }),
        });
    }
}
