async function check(e)
{
e.preventDefault()
let username = document.getElementById('name').value;
let password = document.getElementById('password').value;
await fetch("./userDetails.json").then(res=>
        res.json()
        )
    .then(data=>{
        console.log(data)
        for(let u of data)
        {
            console.log(typeof u.username)
            console.log(typeof u.password)
            console.log(typeof username)
            console.log(typeof password)
            if(u.username.localeCompare(username) && u.password.localeCompare(password))
            {
                console.log("hehehe")
                window.location.href="http://127.0.0.1:5500/ProfilePage.html";
            }
            else{
                console.log("not hehehe")
            }
        }

    })
    .catch(error => 
        console.error(error)
        );
//    window.location.href="http://127.0.0.1:5500/ProfilePage.html";
}

// data.forEach(post =>{
//     console.log(post)
//     if(username === post.username && password === post.password)
//     {
//         console.log("hehe")
//         alert('You are logged in '+username)
//         window.location.href="http://127.0.0.1:5500/ProfilePage.html";
       
        
//     }else{
//         alert(`user doesn't exists`)
//     }
// })