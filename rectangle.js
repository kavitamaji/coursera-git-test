module.exports = (x, y, callback) => {
    if (x <= 0 || y <= 0) {
        setTimeout(() =>
            callback(new Error("Rect dimensions are incorrect - length is " + x + " and breadth is " + y),
            null),// second arg null will be ignored when error is created
            2000);
    }
    else {
        setTimeout(() =>
            callback(null,//I passed error as null
                {
                perimeter: () => (2 * (x + y)),
                area: () => (x * y)
            }),
            2000);
    }
}



/*exports.perimeter = (x, y) => (2 * (x + y));
exports.area = (x, y) => (x * y);*/