const regex = /^(https?:\/\/)[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=%]+[.][a-zA-Z]+$/;

function validurl(url){
    return regex.test(url);
}

const url ="https://www.youtube.com/";

if(validurl(url)){
    console.log("Valid url");  
}
else{
    console.log("Invalid url");  
}
