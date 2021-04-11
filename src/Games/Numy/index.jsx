import React from "react";

import GameClass from "../GameClass";
import { generateKeyMatrix, checkKeyMatrix } from "./matrixManipulation";

import "./Numy.css";

const SquaredOrTall = ({ width, height }) =>
    width > height ? { height, width: height } : { width, height };

const squareUnits = 7,
    baseSize = 19,
    addMixBreak = 5;

const initState = (matrixSize) => ({
    keyMatrix: generateKeyMatrix(matrixSize),
    addMix: 1,
    selected: null,
});

const Cell = {
    Number: ({ val, isSelected, onClick }) => (
        <div onClick={onClick} className={isSelected ? "selected" : null}>
            {val}
        </div>
    ),
    Empty: () => <div className="empty"></div>,
};

class Numy extends GameClass {
    constructor(props) {
        super(props);
        this.state = {
            level: 1,
            ...initState(baseSize),
        };
    }

    componentDidMount() {
        this.linkButtons({
            medium: {
                left: "Undo",
            },
            big: "Add",
        });
    }

    handleCellClick = (index) => {
        const { selected } = this.state;

        if (selected === null) {
            this.setState({ selected: index });
            return;
        }
        const { wasChanged, keyMatrix } = checkKeyMatrix(
            this.state.keyMatrix,
            selected,
            index
        );

        this.setState({ ...(wasChanged && { keyMatrix }), selected: null });
    };

    big = () => {};

    restart = () => {};

    render() {
        const { size } = this.props;
        const { keyMatrix } = this.state;
        const gameSize = SquaredOrTall(size);
        const gameUnit = gameSize.width / (squareUnits * 9 + 14);
        return (
            <div className="numy">
                <div
                    className="game"
                    style={{
                        ...gameSize,
                        "--game-unit": `${gameUnit}px`,
                    }}
                >
                    <div className="table-container">
                        <div className="table">
                            {keyMatrix.matrix.map((val, index) =>
                                val ? (
                                    <Cell.Number
                                        onClick={() =>
                                            this.handleCellClick(index)
                                        }
                                        key={
                                            keyMatrix.keys[
                                                Math.floor(index / 9)
                                            ] *
                                                10 +
                                            (index % 9)
                                        }
                                        val={val}
                                        isSelected={
                                            this.state.selected === index
                                        }
                                    />
                                ) : (
                                    <Cell.Empty />
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Numy;
