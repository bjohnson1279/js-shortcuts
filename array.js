export const isArr = (a) => {
    return Array.isArray(a);
}

export const arrMap = (arr, callback) => {
    if (isArr(arr)) {
        return arr.map(callback);
    } else {
        console.error(`${arr} is not an array`);
    }
}

export const arrFilter = (arr, callback) => {
    if (isArr(arr)) {
        return arr.filter(callback);
    } else {
        console.error(`${arr} is not an array`);
    }
}

export const arrSort = (arr, callback) => {
    if (isArr(arr)) {
        return arr.sort(callback);
    } else {
        console.error(`${arr} is not an array`);
    }
}
