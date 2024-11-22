//inner and outer functions arguments

function test1(p){
    function test2(q){
        console.log("test2",p,q);
    }
    //console.log("test1",p,q);   // error
    console.log("test1",p);
}
test1(90);