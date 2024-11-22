// instance invocation avaible
(function test1(){
    console.log("from test1");
})();

(() => {
    console.log("from test2");
})();




((a,b)=>{
console.log("from test2",a,b);
})(12,34);  // thease parameter are callimg statements