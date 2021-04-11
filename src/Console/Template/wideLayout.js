const wideLayout = (size, unit) => {
    const smallButtonTop = unit * 4,
        smallButtonLeft = [
            unit * 6,
            unit * 11,
            size.width - unit * 9,
            size.width - unit * 4,
        ];
    return {
        body: {
            right: size.width,
            bottom: size.height,
            wide: true,
        },
        screen: {
            left: unit * 15,
            top: unit * 2,
            right: size.width - unit * 10,
            bottom: size.height - unit * 2,
        },
        smallButtons: {
            coords: smallButtonLeft.map((l) => [l, smallButtonTop]),
        },
        arrowButtons: {
            left: unit * 6,
            top: (size.height - unit * 7) / 2,
        },
        bigButton: {
            left: size.width - unit * 7.5,
            top: (size.height - unit * 4) / 2,
        },
        diagonals: {
            left: unit * 6,
            top: size.height - unit * 5,
        },
    };
};

export default wideLayout;
