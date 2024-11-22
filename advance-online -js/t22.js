// Asynchranous : one function taking result of another function




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
var r1;
setTimeout(() =>{       // we  are implementing  asyncronus
     r1=test1();
}, 0); 
test2(r1);        // test2 is excuting without waiting for test1 
console.log('end'); 
console.log('again end');

// line 18 19 not depending on test1
// test 1 is a time consuming




