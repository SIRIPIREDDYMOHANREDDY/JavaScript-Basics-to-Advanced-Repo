// CALLBACK : continue

function task1(nextTask){
    console.log('task1 is done');
    nextTask();
}
function task2(nextTask){
    console.log('task2 is done');
    nextTask();
}
function task3(nextTask){
    console.log('task3 is done');
}

//task2(task3);
//task1(task2(task3));  wrong

// task1(function(){ // supply through anonymous function
//     task2(task3);
// });
task1(()=>{
    task2(task3);

});