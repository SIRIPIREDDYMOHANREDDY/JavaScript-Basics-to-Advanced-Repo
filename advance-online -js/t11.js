// CLOSER CONCEPT
// returning the function defintion (imp)


// function test1(p){

//     var v1 = function(q){
//         return p +q;
//     }
//     return v1;
// }
function test1(p){
    function test2(q){
        return p + q;
    }
    return test2;
}

var test1Result =test1(10);

// test1Result = function test2(q){
//}return 10 +q;
// 
// this concept is called is closer
// nested  inner,function maintained by arguments of outer function

var test2Result =test1Result(30);
console.log(test2Result);

