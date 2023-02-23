let userList={
    userA:{
        name: "admin",
        password: "admin"
    },
    userB:{
        name:"vineetks",
        password:"vineetks"
    }
};

// localStorage.setItem('userList',JSON.stringify(userList));
window.addEventListener('load',function(){
   
    const iframe = document.querySelector("iframe")
    const wind = iframe.contentWindow
    console.log(wind,"hellouuuu in sigin")
    let message =JSON.stringify(userList);
    wind.postMessage(message,"*")
})
// for signup
window.addEventListener('message',function(e){
    const dataa = JSON.parse(e.data)
    console.log("hello in sign in")
    console.log(dataa,"hehheheheh in sign in ")
    
    let users = window.localStorage.getItem('userList',JSON.stringify(dataa))
        window.localStorage.setItem('userList',JSON.stringify(dataa))
        console.log(users)
       
  
})

if(!localStorage.getItem('userList'))
{
    localStorage.setItem('userList',JSON.stringify(userList));
}
let username;

const check =()=>{
   

    
    
     username = document.getElementById('name').value;
    let password = document.getElementById('password').value;
 //   console.log(username)
   // console.log(password)
    let storedusers = JSON.parse(localStorage.getItem('userList'));
    console.log(storedusers)
    for(let u of Object.keys(storedusers))
        {
            if(username===storedusers[u].name && password===storedusers[u].password)
            {
                console.log(storedusers[u].name);
                console.log(storedusers[u].password);
            }
        }
    if(storedusers)
    {
        for(let u of Object.keys(storedusers))
        {
            if(username===storedusers[u].name && password===storedusers[u].password)
            {
                alert('You are logged in '+username)
                window.location.href="/home/beehyv/Dailywork/HtmlPrac/Bootstraprac/ProfilePage.html"
               // console.log(storedusers[u])
            }
        }
    }
  
   
    return alert('Access denied. Valid username and password is required.');
}

// console.log(username)
// // if(username ==='admin')
// // {
//     const url = "/home/beehyv/Dailywork/HtmlPrac/Bootstraprac/icon.svg"
//     const output = document.querySelector("#profilepic1");
//     const div = document.createElement("div");
//     div.innerHTML=`<img src="${url}"/>`
//     output.appendChild(div);
    
// }
