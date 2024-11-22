function test1(){
    console.log("from test1");
}


// test1();
// test1();
// test1();


let test2 = function(){     // the whole function  definition assing to variable
    console.log("from test2");
}
//test2();
function test3(arg1,arg2){  //it is a taking a argument
    console.log("from test3",arg1,arg2);
}


//test3(10,'abc');

var test4 = function name(a1,a2) {
    console.log('from test4',a1,a2);
    
}
//test4(10,'xyz');

// return type in function
function test5(){
    console.log("from test5");
    return 'abc';
}
 //console.log(test5());

 const test6 = function(){
    console.log('from test6');
    return 2000;
 }
 //console.log(test6());
//  console.log(test1);
//  console.log(test2);
//  console.log(test3);
//  console.log(test4);
//  console.log(test5);
//  console.log(test6);
 


