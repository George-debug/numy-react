const slimLayout = (size, unit) => {
    const smallButtonGap = size.width / 3 - unit * 6,
        smallButtonTop = size.height - unit * 20,
        smallButtonLeft = unit * 5;
    return {
        body: {
            right: size.width,
            bottom: size.height,
        },
        screen: {
            left: unit * 2,
            top: unit * 5,
            right: size.width - unit * 2,
            bottom: size.height - unit * 21,
        },
        smallButtons: {
            coords: new Array(4)
                .fill(null)
                .map((c, i) => [
                    smallButtonLeft + (unit * 2 + smallButtonGap) * i,
                    smallButtonTop,
                ]),
        },
        arrowButtons: {
            left: unit * 4,
            top: size.height - unit * 15,
        },
        bigButton: {
            left: size.width - unit * 8,
            top: size.height - unit * 13,
        },
        diagonals: {
            left: unit * 7,
            top: size.height - unit * 6,
        },
    };
};

export default slimLayout;
