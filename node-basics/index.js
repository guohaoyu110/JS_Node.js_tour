// var rect = {
//     perimeter: (x,y) => (2*(x+y));
//     area: (x,y) => (x*y);
// }
var rect = require('./rectangle');

function solveRect (l,b){
    console.log ("Solving for rectangle with l= " + l + ' and b = ' + b );

    // if (l <= 0 || b <= 0){
    //     console.log('Rectangle dimensions should be greater than 0');
    // }
    // else {
    //     console.log('The area of the rectangle is '+ rect.area(l,b));
    //     console.log('The perimeter of the rectangle is '+ rect.perimeter(l,b) );
        
    // }
    rect(l, b, (err,rectangle) => {
        if (err){
            console.log('Error: ', err.message );
        }
        else {
            console.log('The area of the rectangle of dimensions l = '+ l + " and b = "+ b + " is " + rectangle.area());
            console.log('The parameter of the rectangle is ' + rectangle.perimeter());
            
        }
    });
    console.log('This statement if after the call to rectangle');
    
}
// this is a 2 second delay that we introduced using the settimeout
solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);