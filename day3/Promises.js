var promise = new Promise((resolve,reject)=>{
   reject("Adfar Rashid")
})
promise.then((result)=>{
    console.log(result)
    console.log("promise success")
})