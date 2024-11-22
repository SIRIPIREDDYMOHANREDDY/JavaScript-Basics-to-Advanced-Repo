function test1(){
    if(false){
        var v1 =100;
    }
    console.log("inside test1:" +v1);
}
//console.log("after test1:" +v1);  // runtime error
test1();