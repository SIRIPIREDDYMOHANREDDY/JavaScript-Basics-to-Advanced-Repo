 //CALLBACK:imp
// one function defintion sending an argument to another function

function test1(callBack){
    console.log('from test1');
    callBack();
}

// function test2(){
//     console.log('from test2');
// }
//test1(test2); // here we are not making a call test2 definition is assigned to callbcak and excute callBack

// Ananymoues function using calling callBack function

// test1(function(){
//    console.log("from anonymous function");
// });


//By using arrow function calling callBcak function

// test1(() =>{
//    console.log("from arrow function");
// });


function task1(nextTask){
    console.log('task1 is done');
    nextTask();  //it  is a argument .. tis is callles as call back
}

function task2(){
    console.log('task2 is done');
}

//task1(task2);

// task1(function(){
//     console.log('next task with anaonymous function');
// });

task1(() =>{
    console.log('next task with anaonymous function');
});




