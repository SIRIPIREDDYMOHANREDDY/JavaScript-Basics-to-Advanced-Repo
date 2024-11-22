function test1(){
    var s = "Banana is good for health than apple";
    var count = 0;
    for(var i = 0; i < s.length; i++){
        if(s[i]){
            count++;
        }
        console.log(count);
    }
    test1();
}
function test2(){
    var array =
    [  [1,2,3],
       [4,5,6],
       [10,11,12],
       [13]
    ];
    var array1 = new Array();
    var array2 = new Array();
    for(var i = 0; i < array.length; i++){
        if(i % 2 == 0){
            array1[i] = array[i];  
        } 
        else{
            array2[i] = array[i];
        } 
    }
    
    console.log(array1);
    console.log(array2);
}
//test2();