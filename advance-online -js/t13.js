   //Default parameter
// default values take in the parameters if we are suppying any value

function test1(a = 0, b = 0){
    return a + b;
}

var r1 = test1(10, 20);
var r2 = test1(10);
var r3 = test1();
console.log(r1, r2, r3);