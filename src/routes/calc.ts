export function pow(matrix: number[][], pow: number) {
    return power(matrix, matrix, pow);
}

function power(matrix: number[][], powered: number[][], pow: number): number[][] {
    if (pow === 0) {
        return identity(matrix.length);
    } else if (pow === 1) {
        return powered;
    }
    const nextPowerMatrix: number[][] = [];
    for (let i = 0; i < matrix.length; i++) {
        nextPowerMatrix.push([]);
        for (let j = 0; j < matrix.length; j++) {
            nextPowerMatrix[i].push(0);
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            for (let k = 0; k < matrix.length; k++) {
                nextPowerMatrix[i][j] += matrix[i][k] * powered[k][j];
            }
        }
    }
    return power(matrix, nextPowerMatrix, pow - 1);
}

function identity(size: number): number[][] {
    const identity: number[][] = [];
    for (let i = 0; i < size; i++) {
        identity.push([]);
        for (let j = 0; j < size; j++) {
            identity[i].push(i === j ? 1 : 0);
        }
    }
    return identity;
}
