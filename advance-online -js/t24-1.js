//Time Consuming:Synchranous and Asynchrous and also dependency in same code:(imp)

function task1(callBack){
    for(var i = 0; i < 9000000000; i++){

    }
    console.log('from task1');
    var results = [12, 30, 50];
    callBack(results);
}
function task2(results, callBack){
   console.log('from task2', results);
   callBack(results);
}
function task3(results){
    console.log('from task3');
}
function task4(){
    console.log('from task4');
}
 console.log('begin');
 setTimeout(() => {
    task1((results) => {
        task2(results, task3);
      });
    }, 0);
      task4();       
console.log('end');