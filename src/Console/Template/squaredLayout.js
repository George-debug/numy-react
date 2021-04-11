const squaredLayout = (size, unit) => {
    const smallButtonsLeft = unit * 16.5,
        smallButtonsTop = size.height - unit * 13,
        smallButtonsGap = (size.width - unit * 14 - smallButtonsLeft) / 3;
    return {
        body: {
            wide: true,
            right: size.width,
            bottom: size.height,
        },
        screen: {
            left: unit * 7,
            top: unit * 2,
            right: size.width - unit * 4,
            bottom: smallButtonsTop - unit * 2,
        },
        smallButtons: {
            coords: [
                [smallButtonsLeft + smallButtonsGap, smallButtonsTop],
                [
                    smallButtonsLeft + unit * 2 + smallButtonsGap * 2,
                    smallButtonsTop,
                ],
                [
                    smallButtonsLeft + smallButtonsGap,
                    smallButtonsTop + unit * 4,
                ],
                [
                    smallButtonsLeft + unit * 2 + smallButtonsGap * 2,
                    smallButtonsTop + unit * 4,
                ],
            ],
        },
        arrowButtons: {
            left: unit * 9,
            top: size.height - unit * 14,
        },
        bigButton: {
            left: size.width - unit * 10,
            top: smallButtonsTop + unit / 2,
        },
        diagonals: {
            left: unit * 6,
            top: size.height - unit * 5,
        },
    };
};

export default squaredLayout;
