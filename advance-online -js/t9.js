function test1(){
    var i =10;
    function test2(){
        var j =20;
        console.log("inner:",i,j);
    }
    //console.log("outer",i,j);
    console.log("outer",i);
    test2();
}

test1();