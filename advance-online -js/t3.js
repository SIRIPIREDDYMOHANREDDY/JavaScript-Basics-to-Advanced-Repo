
// Arrow Functions

var test1 = () => {
                 console.log("from test1");
             };
//test1();  
let test2 = (a1) => {
                 console.log("from test2;", a1);
             }
//test2(10);   
const test3 = (a1, a2) => {
                  console.log('from test3', a1, a2);
              }  
//test3(10, 'hello');  

//Return the values :

const test4 = () => { // it is not taking any argument it returning the value
                  console.log('from test4');
                  return 120;
               }
// var v1 =  test4();
// console.log(v1); 
var test5 = (a1, a2) => {
              console.log('from test5');
              return a1 + a2;
            }   
//console.log(test5(10, 30));
var test6 = (a1, a2) => a1 + a2;
console.log(test6(10, 50));
                           