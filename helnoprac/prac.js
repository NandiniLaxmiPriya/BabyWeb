const e = require("express")

const prom = new Promise((resolve,reject)=>{

    setTimeout(()=>{
        isReady = [true,false][Math.floor(Math.random()*2)],
        isReady ? resolve("Soup ready"):reject("Soup not ready")
    })})
    // prom
    // .then(data=>console.log(data))
    // .catch(error=>console.log(error))

const func = async ()=>{
    try{
    const call = await prom
    console.log(call)
    }catch(error){
        console.log(error)
    }
}
func()