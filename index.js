/*var rect = {
    perimeter: (x, y) => (2 * (x + y)),
    area:(x,y) => (x*y)
};*/

const rectangle = require('./rectangle');
var rect = require('./rectangle');

function solveRect(l, b) {
    console.log("solving for rectangle wih length as " + l + " and breadth " + b);

    rect(l, b, (err, rectangle) => {
        if (err) {
            console.log("error is " + err.message);
        }
        else {
            console.log("length is " + l + " and breadth is " + b + " and area is " + rectangle.area() + " and perimeter is " + rectangle.perimeter());
        }
        
    });
    console.log("this will execute before the rect function even though its placed below it because Rect is delayed by settimeout");

   /* if (l <= 0 || b <= 0) {
        console.log("Rect dimensions are incorrect - length is " + l + " and breadth is " + b);
    }
    else {
        console.log("Area of rectangle is" + rect.area(l, b));
        console.log("Perimeter of rectangle is" + rect.perimeter(l, b));
    }*/
}
solveRect(3, 6);
solveRect(2, 5);
solveRect(0, 6);
solveRect(-3, 6);