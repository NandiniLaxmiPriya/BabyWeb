// const fs = require("fs").promises

// async function store(e)
// {
//     let obj={};
//     e.preventDefault()
//     let username = document.getElementById('fname').value
//     let password = document.getElementById('spassword').value
//     let lastname = document.getElementById('lname').value
//     let dateOfbirth = document.getElementById('dob').value
//     let empid = document.getElementById('eid').value
//     let designation = document.getElementById('designation').value
//     let mail = document.getElementById('mail').value
//     let contactno = document.getElementById('contactNo').value
//     let address = document.getElementById('address').value
//     let language = document.getElementById('lang').value
//     let url = document.getElementById('url').value
//     let pic = document.getElementById('profilepic').value
//     console.log(username)
//     console.log(password)
//     console.log(lastname)
//     console.log(dateOfbirth)
//     console.log(empid)
//     console.log(designation)
//     console.log(mail)
//     console.log(contactno)
//     console.log(address)
//     console.log(language)
//     console.log(url)
//     console.log(pic)
//     obj.username = username;
//     obj.password = password;
//     obj.lastname = lastname;
//     obj.dateOfbirth = dateOfbirth;
//     obj.empid = empid;
//     obj.designation = designation;
//     obj.mail = mail;
//     obj.contactno = contactno;
//     obj.address = address;
//     obj.language = language;
//     obj.url = url;
//     obj.pic = pic;
//     console.log(obj)
// }

const express = require("express")

const fs = require("fs")
const app = express();

const bodyparser = require("body-parser");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.get('/SignUp',function(req,res){
    res.sendFile(__dirname+"/SignUp.html")
})
app.get('/form-submit',function(req,res){

    let obj={}
  //  console.log(req.query)
    let username = req.query.username;
    let password = req.query.password
    let lastname = req.query.lastname
    let dateOfbirth = req.query.dob
    let empid = req.query.eid
    let designation = req.query.designation
    let mail = req.query.mail
    let contactno = req.query.contactNo
    let address = req.query.address
    let language = req.query.language
    let url = req.query.url
    let pic = req.query.file
        obj.username = username;
    obj.password = password;
    obj.lastname = lastname;
    obj.dateOfbirth = dateOfbirth;
    obj.empid = empid;
    obj.designation = designation;
    obj.mail = mail;
    obj.contactno = contactno;
    obj.address = address;
    obj.language = language;
    obj.url = url;
    obj.pic = pic;
    // obj = [obj]
  //  console.log(obj)
  const d = new Date(obj.dateOfbirth);
        let year = d.getFullYear();
        year = 2023-year;
        console.log(year)
       if(year<20){
            res.send(`<script>alert("user must be atleast 20years old"); window.location.href = "http://127.0.0.1:5500/SignUp.html";</script>`)
                return
        }else  if(isNaN(obj.empid))
        {
            res.send(`<script>alert("EmployeeID not a number"); window.location.href = "http://127.0.0.1:5500/SignUp.html";</script>`)
                return
        }else if(obj.contactno.length!==10 || isNaN(contactno))
        {
            res.send(`<script>alert("contact number must be 10 digit "); window.location.href = "http://127.0.0.1:5500/SignUp.html";</script>`)
            return
        }
        else{

  let flag=true;
  
    if(!fs.existsSync("userDetails.json"))
    {
        fs.closeSync(fs.openSync('userDetails.json','w'));
    }
    const file = fs.readFileSync("userDetails.json")

    if(file.length == 0)
    {
        fs.writeFileSync("userDetails.json",JSON.stringify([obj]))
    }else{
        const json = JSON.parse(file.toString())
       console.log(typeof json)

        // json.push(obj)
        // console.log(json)
        // console.log(obj)
        let final = []
        
        for(let a of json)
        {
            // console.log(a)
            if(a.username === obj.username)
            {
                flag=false;
                res.send(`<script>alert("user already exists"); window.location.href = "http://127.0.0.1:5500/SignUp.html";</script>`)
                return
                // res.redirect("http://127.0.0.1:5500/SignUp.html");
            }
            if(a.empid === obj.empid)
            {
                flag=false;
                res.send(`<script>alert("Employee Id already exists"); window.location.href = "http://127.0.0.1:5500/SignUp.html";</script>`)
                return
            }
            final.push(a)
        }
        
        
            final.push(obj)
        
        
        console.log(final)
        // console.log(final,"finallllllll")
        fs.writeFileSync("userDetails.json",JSON.stringify(final))

    }
    if(flag)
    {

    
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
res.header('Expires', '-1');
res.header('Pragma', 'no-cache');
    res.redirect("http://127.0.0.1:5500/index.html");
    }
}
});
app.listen(5501)