var pro = new Promise((resolve,reject)=>{
    let lotnum = 1;
    let prizeNum=Math.floor(Math.random()*5);
    if(lotnum==prizeNum){
        resolve('you won the lottery');
    }
    else{
        reject('better luck next time');
    }
    
})

pro.then(msg=>console.log(msg)).catch(err=>console.log(err));