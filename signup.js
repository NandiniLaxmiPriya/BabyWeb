//sign up
window.addEventListener('load',function(){
   
    const iframe = document.querySelector("iframe")
    const wind = iframe.contentWindow
    console.log(wind,"hellouuuuuu in signup")
    let message =JSON.stringify(JSON.parse(localStorage.getItem('userList')));
    wind.postMessage(message,"*")
})


window.addEventListener('message',function(e){
    const dataa = JSON.parse(e.data)
    console.log("hello in signup")
    console.log(dataa,"hehheheheh in sign up")
   
        window.localStorage.setItem('userList',JSON.stringify(dataa))
  
})

// let userList={
//     userA:{
//         name: "admin",
//         password: "admin"
//     },
//     userB:{
//         name:"vineetks",
//         password:"vineetks"
//     }
// };

// window.localStorage.setItem('userList',JSON.stringify(userList));
function store(){
    let username = document.getElementById('fname').value;
    let password = document.getElementById('spassword').value;
    let storedusers = JSON.parse(localStorage.getItem('userList'))
    // console.log(storedusers)
    // for(let u of Object.keys(storedusers))
    //     {
    //             console.log(storedusers[u].name);
    //             console.log(storedusers[u].password);
         
    //     }
    if(username!=="" && password!=="")
    {
    console.log("you know")
    console.log("you know")
    console.log("you know")
    console.log("you know")
     let i=0;
     let check = false
    i=i+1;
    let obj={
        i:{name:username,password:password}
    }
    console.log(storedusers,"you know")
    if(storedusers)
    {
        for(let u of Object.keys(storedusers))
        {
            if(username!==storedusers[u].name && password!==storedusers[u].password)
            {
                console.log(" befor in if of for")
                check = true
                console.log("after in if of for")
            }
        }
        if(check===true)
        {
            storedusers.i={name:username,password:password}
            localStorage.setItem('userList',JSON.stringify(storedusers))
            
            i=i+1;
        }
        else{
            alert("user already exists")
        }
       // userList[i]={name:username,password:password}
       
    }else{
        // userList[i]={name:username,password:password}
        localStorage.setItem('userList', JSON.stringify(obj));
        
    }
    // for(let u of Object.keys(storedusers))
    //     {
    //             console.log(storedusers[u].name);
    //             console.log(storedusers[u].password);
         
    //     }
    //     console.log(JSON.parse(localStorage.getItem('userList')))
        window.location.href="/home/beehyv/Dailywork/HtmlPrac/Bootstraprac/index.html"
}else{
    alert("check input fields")
}
}


// const signin = document.getElementById('signup')

// signin.addEventListener('click',(e)=>{
//     localStorage.clear()
// })
///-------------------------------------------------

/**validatiion */