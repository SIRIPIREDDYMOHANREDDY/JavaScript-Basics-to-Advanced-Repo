//Time Consuming:Synchranous and Asynchrous and also dependency in same code:(imp)



function task1(callback){
    for(var i= 0;i<9000000000;i++){

    }
    console.log('from task1');
    var results =[12,30,50]
    callback(results) 
}
function task2(results){
    console.log('from task2', results);
}
function task3(){
    console.log("from task3");
}
console.log('begin');
setTimeout(() =>{      // task 2 depending depand on 1    task 2 is callback to task1
            task1(task2);
}, 0);
task3();
console.log('end');

// here task3 is independent(synchranous) , task1 is asyncharnous(time consuming) and task2 is callback

//while achiving asyncronus  to settimeout all dependencies should be supplied throw a call back
//this is real asyncronus function  we are extenseuly using settimeout method
//  t7 dosomedbactivities     call back hell
// in 2015 insteed of call back using promises introduced to achieve same