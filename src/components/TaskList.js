import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function TaskList() {
    const [task, setTasks] = useState ([])
    const [editId, setEditId] = useState (null)
    const [description, setDescription] = useState ('')
    const [title, setTitle] = useState ('')
    const [status, setStatus] = useState('')
    const [priority, setPriority] = useState('')
    const redirect = useNavigate()

    console.log(task)
    
        useEffect(() => {
            fetch()
              .then(res => res.json()
                .then(data => {
                    console.log(data)
                  return setTasks(data.data)
                }
                ))
          }, [])

          function handleDelete(id) {
            fetch( {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json'
              }
            }).then((res) => {
              if (res.ok) {
                setTasks(task.filter(task => task.id !== id))
              }
            })
          }

          function handleEdit(id) {
            setEditId(id)
            console.log(editId)
            setTitle(task.find(task => task.id === id).title);
            setDescription(task.find(task => task.id === id).description);
            setStatus(task.find(task => task.id === id).status);
            setPriority(task.find(task => task.id === id).priority)

          }

          function handleUpdate(id, title, description, status, priority) {
                fetch( {
                  method: 'PATCH',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({ title, description, status, priority })
                }).then((res) => {
                  if (res.ok) {
                    setEditId(null);
                    setTasks(task.map(task => task.id === id ? { ...task, title, description, status, priority } : task))
                  }
                  else 
                  console.log(res)
                })
              }

              function handleLogout() {
                fetch( {
                  method: 'DELETE',
                  headers: {
                    'Content-Type': 'application/json'
                  }
                }).then((response) => {
                  if (response.ok) {
                    redirect("/login")
                  } else {
                    console.log('Logout failed.');
                  }
                }, function(error) {
                  console.log(error);
                });
              }
              
              
          

    const taskList = task.map(task=>{
        return (
 
<>

<div className="card" style={{width: "18rem"}} key={task.id}>
    
  <div className="card-body">
  {editId === task.id?(<input value={title} onChange={(e)=>setTitle(e.target.value)}/>)
  :(<h5 className="card-title">{task.title}</h5>)}
    <h6 className="card-subtitle mb-2 text-muted">My Task</h6>
    
    {editId === task.id?(<input value={description} onChange={(e)=>setDescription(e.target.value)}/>)
    :(<p className="card-text">{task.description}</p>)}

    {editId === task.id?(<input value={status} onChange={(e)=>setStatus(e.target.value)}/>)
    :(<p className="card-text">{task.status}</p>)}

    {editId === task.id?(<input value={priority} onChange={(e)=>setPriority(e.target.value)}/>)
    :(<p className="card-text">{task.priority}</p>)}
    {editId === task.id?(<button onClick={()=>handleUpdate(task.id, title, description, status, priority)}>Save</button>)
    :(<button onClick={()=>handleEdit(task.id)}>Edit</button>)}
    

    <button onClick={()=>handleDelete(task.id)}>Delete</button>
    <button className="btn btn-primary" onClick={handleLogout}>Logout</button>


    {/* <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a> */}
  </div>
</div>
</>
    )
    })

          return (
          <>
           <h3><button onClick={()=>redirect("/tasks/new")}>Add Task</button></h3>
          {taskList}

          </>        
          )

          
}

export default TaskList;