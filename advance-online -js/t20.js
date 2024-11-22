// function inside use for loop : Asynchranous excutes in this code

function test1(){
    for(var i= 0;i<9000000000;i++){

    }
    console.log('from test1');
}

console.log('begin');
setTimeout(()=>{
    test1();
}, 0);
console.log('end'); 



// if we achieving asynchranous don't called function ditectly used setTimeOut method