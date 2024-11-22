
//Promises:


function task1(){
    //return new Promise((resolve,reject) =>{
    var t1=(resolve,reject) =>{
        setTimeout(()=>{
            for(var i= 0;i<9000000000;i++){
    
            }
            console.log('from task1');
         var results =[12,30,50]
         var task1Status=true;
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
    function task3(){
        console.log("from task3");
    }
    console.log('begin');
   // task1().then(results =>task2(results)).catch(e1 =>console.error(e1));  // this line is completly ascronus  // function chaining // some people calling method chaining
    task1().then((results) =>{
     task2(results);
    }).catch((e1) =>{
        console.error(e1);
                    });                // this line is completly ascronus  // function chaining // some people calling method chaining
    task3();
    console.log('end');
    // promises are mainly used for to avoid call back
    // this promise object internally use asyncronus
    //while performing task1 if promise object is return  resolved  then  function executed 
    //if promise object developed through  reject catch method is execute 
    //this whole is called is method chaining



    // 1st way of promise through function chaining:
// here task1 is returning a promise object then method is taking the results if it is resolve succes call the task2 other wise if any errors is there catch method excute this is called function/method chaining.
// here the entire promise object is excuted through Asyncharanous