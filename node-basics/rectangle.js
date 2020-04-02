// exports.perimeter = (x,y) => (2*(x+y));
// exports.area = (x,y) => (x*y);

// modify it to take the help of callbacks

module.exports = (x,y,callback) => {
    if (x <= 0 || y <= 0){
        setTimeout(() => callback(new Error("Rectangle dimensions should be  x= " + x + ' and y = ' + y), null),
         2000); // the second parameter is time period
        // use this function to delay before the callback function is called.
        // whatever is begin done in this rectangle is going to take some time.
        // this is asynchronous processing
        console.log('Rectangle dimensions should be greater than 0');
    }
    else {
        setTimeout(() => callback(null, {
            perimeter: () => (2*(x+y)),
            area: () => (x*y) // 前面不需要写x和y
        }),
         2000);
         // a two second interval before the value will be passed back by this function 
    }
}