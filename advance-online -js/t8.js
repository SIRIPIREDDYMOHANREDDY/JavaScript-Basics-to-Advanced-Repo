//  Nesting a function(one function inside a another function)

function test1(){
    console.log('test1 begin')
    function test2(){
        console.log('from test2');
    }
    console.log('test1 end');
    test2();   // it is possible function inside a another function
}
test1();
//test2() getting error because test2 is within the test1