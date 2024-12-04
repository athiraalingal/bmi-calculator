const count= false;
let countValue = new Promise(function(resolve,reject){
    if(count){
        resolve("there is a count Value");
    }else{
        reject("there is not a count Value");
    }
})

console.log(countValue);