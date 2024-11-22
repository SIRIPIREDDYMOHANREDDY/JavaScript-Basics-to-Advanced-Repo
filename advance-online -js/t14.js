function test1(i, ...j){  // rest parameter or param
    console.log(i,j);    // rest param is array like java var arg is a array
}                          // rest param last parameter

test1();
test1(10);
test1(10,20,30);
test1(10,20,30,40);
test1(10,20,30,40,50,60);


// function test2(...i,j){  invalid syntax var arg

// }
