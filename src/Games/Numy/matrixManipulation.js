/*
    {
        matrix: [a0, a1, a2, a3,... ai, ... an], //ai natural number
        keys: [k1, k2, k3, ... kj, ...k(n/9)], //kj natural number, kj > k(j-1)
    }
*/

const shuffleArray = ([...list]) => {
    list.forEach((__element, index) => {
        const newIndex = Math.floor(Math.random() * list.length);
        [list[index], list[newIndex]] = [list[newIndex], list[index]];
    });
    return list;
};

const matrixValuesAreValid = (matrix, p1, p2) =>
    p1 !== p2 && (matrix[p1] === matrix[p2] || matrix[p1] + matrix[p2] === 10);

const matrixCheckRow = (matrix, p1, p2) => {
    do {
        p1++;
    } while (p1 < p2 && matrix[p1] === null);
    return p1 === p2 ? true : false;
};

const matrixCheckColumn = (matrix, p1, p2) => {
    if (p1 % 9 !== p2 % 9) return false;

    do {
        p1 += 9;
    } while (p1 < p2 && matrix[p1] === null);
    return p1 === p2 ? true : false;
};

const matrixKeyCheckAndClearRow = (keyMatrix, p) => {};

export const checkKeyMatrix = ({ ...keyMatrix }, p1, p2) => {
    let wasChanged = false;

    if (p1 > p2) [p1, p2] = [p2, p1];

    if (
        matrixValuesAreValid(keyMatrix.matrix, p1, p2) &&
        (matrixCheckRow(keyMatrix.matrix, p1, p2) ||
            matrixCheckColumn(keyMatrix.matrix, p1, p2))
    ) {
        keyMatrix.matrix[p1] = null;
        keyMatrix.matrix[p2] = null;
        wasChanged = true;
    }
    return { wasChanged, keyMatrix };
};

export const generateKeyMatrix = (matrixSize) => {
    let matrix = new Array(Math.floor(matrixSize / 2))
        .fill(null)
        .map(() => Math.floor(Math.random() * 9 + 1));

    return {
        matrix: shuffleArray([
            ...matrix,
            ...matrix,
            matrixSize % 2 && matrix[0],
        ]),
        keys: new Array(Math.ceil(matrixSize / 9))
            .fill(null)
            .map((__element, index) => index),
    };
};
