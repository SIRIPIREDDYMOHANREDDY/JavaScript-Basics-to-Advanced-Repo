//Time Consuming
// function inside use for loop : synchranous excutes in yhis code


function test1(){
    for(var i= 0;i<9000000000;i++){

    }
    console.log('from test1');
}
console.log('begin');
test1();
console.log('end'); 
//test 1 is a time consuming method
// syncronus