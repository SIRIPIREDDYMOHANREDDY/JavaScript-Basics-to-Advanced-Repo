// Promises

function task1(){
    //return new Promise((resolve,reject) =>{
    var t1=(resolve,reject) =>{
        setTimeout(()=>{
            for(var i= 0;i<9000000000;i++){
    
            }
            console.log('from task1');
         var results =[12,30,50]
         var task1Status=false;
         if(task1Status){
            resolve(results);
         }
         else{
            reject("task1 is failed")
         }
        },0);
    };
    var pr = new Promise(t1);
    return pr;
}
    function task2(results){
        console.log('from task2', results);
    }
    async function task1AndTask2(){  // inside async function making async code as syncronus
    try{
        const task1Results =await task1();  
task2(task1Results);

    }
    catch(e1){
        console.error(e1);

    }
    }
        
    function task3(){
        console.log("from task3");
    }
    console.log('begin');
   // task1().then(results =>task2(results)).catch(e1 =>console.error(e1));  // this line is completly ascronus  // function chaining // some people calling method chaining
    // task1().then((results) =>{
    //  task2(results);
    // }).catch((e1) =>{
    //     console.error(e1);
    //                 });                // this line is completly ascronus  // function chaining // some people calling method chaining
   task1AndTask2();
    task3();
    console.log('end');
    //current development using



    // avoiding the chaining method in promise through async and await function
//await and async is used for the make a asynchranous code to synchranous code
// here task1 is async code is a time consuming code and task2 is dependency on task1 and task3 is independent
// task1 and task2 are synchranous , task1 and task3 are asynchranous