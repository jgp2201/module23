var input ="jayvardhan patel";
console.log("Original String : ",input);
setTimeout(function(){
    var reversed = input.split("").reverse().join("");
    console.log("Reversed String : ",reversed);
},2000,input)