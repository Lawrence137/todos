import { useState } from "react";
import { useNavigate  } from "react-router-dom";


function Signup() {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')

    const redirect = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
    
       fetch({
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                
                username:username,
                email:email,
                password_hash:password
            })
        }).then((res)=>{
            if(res.ok){
                console.log()
                redirect("/login")

                return res.json()
            }else{
                throw new Error('Email already exists')
            }
        })
    }
    return (

        
        <form onSubmit={handleSubmit}>
            <h2>Welcome to Task Train</h2>
<div className="container col-md-4">
  <label for="exampleInputPassword1" class="form-label">username</label>
    <input type="text" name="username" class="form-control"  value={username} onChange={e=>setUsername(e.target.value)}/>
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" name="email" class="form-control"  value={email} onChange={e=>setEmail(e.target.value)}/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
 
 
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" name="password" class="form-control" value={password} onChange={e=>setPassword(e.target.value)}/>

  <button type="submit" class="btn btn-primary" >Submit</button>
</div>
</form>
    )

}

export default Signup;