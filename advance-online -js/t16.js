 // Synchranous

function test1(){
    console.log('test1');
}

function test2(){
    console.log('test2');
}

// in java script by default syncronus execution
//what is mean statement by statement test1 completed after another test
//Asyncronus multiple activities
test1();
test2();
test1();
test1();
test2();
test1();