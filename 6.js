
const regex = /^https?:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}\/?$/;

function validprofile(url){
    return regex.test(url);
}

const url ="https://www.linkedin.com/in/abhishek-ranjan-791b6b22a";

if(validprofile(url)){
    console.log("Valid url");  
}
else{
    console.log("Invalid url");  
}