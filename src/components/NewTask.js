import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewTask() {
    
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [status, setStatus] = useState('')
    const [priority, setPriority] = useState('')
    const redirect = useNavigate()

    function handleSubmit(e){
        e.preventDefault()
        fetch(`https://task-manager-tcxk.onrender.com/tasks/create`,{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
             body: JSON.stringify({
                title:title,
                description:description,
                
            })
        }).then((res)=>{
            if(res.ok){
                console.log(res)
                redirect('/tasks')
                return res.json()
            }else{
                console.log(res)
            }
        })
    }
    return  (
        <div className="col-md-6 container">
<h4>Add New Task</h4>
<form onSubmit={handleSubmit}>
  <label htmlFor="title">Title:</label>
  <input type="text" name="title" className="form-control" id="" placeholder='Enter title' value={title} onChange={e => setTitle(e.target.value)} />
  
  <label htmlFor="description">Description:</label>
  <textarea className="form-control" name='description' value={description} onChange={e => setDescription(e.target.value)} required></textarea>

  <label htmlFor="status">Status:</label>
  <select className="form-control" name="status" id="status" value={status} onChange={e => setStatus(e.target.value)}>
    <option value="created">Created</option>
    <option value="started">Started</option>
    <option value="completed">Completed</option>
    <option value="cancelled">Cancelled</option>
  </select>

  <label htmlFor="priority">Priority:</label>
  <select className="form-control" name="priority" id="priority" value={priority} onChange={e => setPriority(e.target.value)}>
    <option value="high">High</option>
    <option value="medium">Medium</option>
    <option value="low">Low</option>
  </select>

  <button type="submit">Save</button>
</form>

    </div>
    )

     
}

export default NewTask;