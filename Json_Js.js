
let samuser = {}

async function check(e)
{
e.preventDefault()
 let username = document.getElementById('name').value;
 let password = document.getElementById('password').value;
 let flag = true;

await fetch("./userDetails.json").then(res=>
        res.json()
        )
    .then(data=>{
        console.log(data)
        for(let u of data)
        {
            if(u.username === username && u.password === password)
            {
                flag=false
                console.log("hehehe")
                // sessionStorage.setItem("AuthenticationState", "Authenticated");
                //sessionStorage.clear();
                window.location.href="http://127.0.0.1:5500/ProfilePage.html?username="+username;
                return
            } 
        }
        if(flag)
        {
            console.log(flag,"hello flag")
                console.log("not hehehe")
                alert("Invalid username or password Or User doesn't exists") 
        }

    })
    .catch(error => 
        console.error(error)
        );
}

if(window.location.href === "http://127.0.0.1:5500/ProfilePage.html")
{
    console.log("hehe in profile")
    console.log(samuser)
    window.location.href = "http://127.0.0.1:5500/index.html"
}
// window.onload = function(){
//     if(window.location.href==="http://127.0.0.1:5500/ProfilePage.html" )
//     {
//         window.location.href="http://127.0.0.1:5500/index.html"
//     }
// }