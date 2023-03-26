import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login() {
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

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
                password_hash:password
            })
        }).then((res)=>{
            if(res.ok){
                console.log(res)
                redirect("/list")

                return res.json()
            }else{
                throw new Error('Username already exists')
            }
        })
    }
    return (
        <form onSubmit={handleSubmit}>
<div className="container col-md-4">            
  
    <label for="exampleInputEmail1" class="form-label">username</label>
    <input type="username" name="username" class="form-control"  value={username} onChange={e=>setUsername(e.target.value)}/>
    <div id="emailHelp" class="form-text"></div>
 
  
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" name="password_hash" class="form-control" value={password} onChange={e=>setPassword(e.target.value)}/>
 
  <button type="submit" class="col-md-6 btn btn-primary" >Submit</button>
</div>
</form>
    )
        
    

     
}

export default Login;