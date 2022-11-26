/*var rect = {
    perimeter: (x, y) => (2 * (x + y)),
    area:(x,y) => (x*y)
};*/

var rect = require('./rectangle');

function solveRect(l, b) {
    console.log("solving for rectangle wih length as " + l + " and breadth " + b);
    if (l <= 0 || b <= 0) {
        console.log("Rect dimensions are incorrect - length is " + l + " and breadth is " + b);
    }
    else {
        console.log("Area of rectangle is" + rect.area(l, b));
        console.log("Perimeter of rectangle is" + rect.perimeter(l, b));
    }
}
solveRect(3, 6);
solveRect(2, 5);
solveRect(0, 6);
solveRect(-3, 6);