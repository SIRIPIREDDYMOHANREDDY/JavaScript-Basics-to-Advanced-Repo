// synchranous : one function taking result of another function
function test1(){
    for(var i= 0;i<9000000000;i++){

    }
    console.log('from test1');
    return [12,30,50];
}
function test2(results){
    console.log("results are", results);
}

console.log('begin');
var r1 =test1();  //13,14 syncronus 14  using return value 13
test2(r1);
console.log('end'); //15 and 16 not depending independing
console.log('begin');





// test1  time consuming 


