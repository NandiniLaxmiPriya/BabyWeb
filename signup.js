// window.addEventListener('message',function(e){
//     if(e.origin!=="/home/beehyv/Dailywork/HtmlPrac/Bootstraprac/index.html")
//     {
//         return
//     }
//     const dataa = JSON.parse(e.data)
//     console.log(dataa)
   
//         window.localStorage.setItem('userList',JSON.stringify(dataa))
  
// })

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
     let i=0;
    i=i+1;
    let obj={
        i:{name:username,password:password}
    }
    if(storedusers)
    {
        
        storedusers.i={name:username,password:password}
        userList[i]={name:username,password:password}
        localStorage.setItem('userList',JSON.stringify(storedusers))
    }else{
        // userList[i]={name:username,password:password}
        localStorage.setItem('userList', JSON.stringify(obj));
    }
    for(let u of Object.keys(storedusers))
        {
                console.log(storedusers[u].name);
                console.log(storedusers[u].password);
         
        }
        console.log(JSON.parse(localStorage.getItem('userList')))
        window.location.href="/home/beehyv/Dailywork/HtmlPrac/Bootstraprac/ProfilePage.html"
}



// const signin = document.getElementById('signup')

// signin.addEventListener('click',(e)=>{
//     localStorage.clear()
// })
///-------------------------------------------------

/**validatiion */