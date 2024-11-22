// 1. capitalize the word

var  str = "hello to all how are you"
function capitalizewords(str){
    return str.split('').map(word =>
        word.charAt(0).toUpperCase() + 
        word.slice(1)).join(' ');
}
console.log(capitalizewords("hello to all how are you"));

// 2. count occurence of each character

function count(str){
     let charCount = {};
     for(let char of str){
        charCount[char] = (charCount[char] || 0) + 1;
     }
     return charCount;
}
console.log(count("Banana is good for health than apple"));

// 3. group array int even and odd arrays
