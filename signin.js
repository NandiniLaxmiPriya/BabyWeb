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

window.localStorage.setItem('userList',JSON.stringify(userList));
// window.addEventListener('load',function(){
   
//     const iframe = document.querySelector("iframe")
//     const wind = iframe.contentWindow
//     console.log(wind)
//     wind.postMessage(JSON.stringify(userList),"*")
// })
const check =()=>{
   

    
    
    let username = document.getElementById('name').value;
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
    else{
        localStorage.setItem('userList','[]')
    }
    
   
    return alert('Access denied. Valid username and password is required.');
}

// const signin = document.getElementById('login')
// signin.addEventListener('click',check)
// function store(){
//     let username = document.getElementById('fname').value;
//     let password = document.getElementById('spassword').value;
//     let storedusers = JSON.parse(localStorage.getItem('userList'))
//     console.log(storedusers)
//     for(let u of Object.keys(storedusers))
//         {
//                 console.log(storedusers[u].name);
//                 console.log(storedusers[u].password);
         
//         }
//      let i=0;
//     i=i+1;
//     if(storedusers)
//     {
        
//         storedusers.i={name:username,password:password}
//         userList[i]={name:username,password:password}
//         localStorage.setItem('userList',JSON.stringify(userList))
//     }else{
//         userList[i]={name:username,password:password}
//         localStorage.setItem('usersList', JSON.stringify(userList));
//     }
//     for(let u of Object.keys(storedusers))
//         {
//                 console.log(storedusers[u].name);
//                 console.log(storedusers[u].password);
         
//         }
//         console.log(JSON.parse(localStorage.getItem('userList')))
//         for(let u of Object.keys(userList))
//         {
//                 console.log(userList[u].name);
//                 console.log(userList[u].password);
         
//         }
//         window.location.href="/home/beehyv/Dailywork/HtmlPrac/Bootstraprac/index.html"
//         debugger
// }

// const signin = document.getElementById('login')
// if(localStorage.getItem('username') && localStorage.getItem('password'))
// {
//     document.getElementById('name').value = localStorage.getItem('username')
//     document.getElementById('password').value = localStorage.getItem('password')
// }
//  signin.addEventListener('click',(e)=>{
//     e.preventDefault()

//     let username = document.getElementById('name').value;
//     let password = document.getElementById('password').value;

//     localStorage.setItem('username',username)
//     localStorage.setItem('password',password)
//     alert('you are logged in')
//  })

// const signin = document.getElementById('login')

// signin.addEventListener('click',(e)=>{
//     localStorage.clear()
// })


/**localStorage.setItem('userList',JSON.stringify(userList));

let users = JSON.parse(localStorage.getItem('userList'));
console.log(users.userA)

if(localStorage.getItem('username') && localStorage.getItem('password'))
{
    document.getElementById('name').value = localStorage.getItem('username')
    document.getElementById('password').value = localStorage.getItem('password')
 } */