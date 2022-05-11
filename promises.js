// node js is a Asynchronous language
// so how to be handel Asynchronous data ??
// using promise we handel 


let a = 20

/*
 @ problem

 let a=20;
 let b=0;

 setTimeout(()=>{
    b=50;
 },2000); // stop exuction for 2 sec
 
 //result 20 => expect result =>70
 console.log(a+b) 
 so how to achive "70" using promises
*/

let waitingData = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(50)
     },2000);
})

waitingData.then((Data)=>{
    b=Data;
    console.log(a+b);

})