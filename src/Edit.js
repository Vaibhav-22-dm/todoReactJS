import { useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"

const Edit = () => {
    const { id } = useParams()
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [deadline, setDeadline] = useState('');
    const [isFetched, setIsFetched] = useState(true);

    if(isFetched) {
        fetch('https://my-json-server.typicode.com/vaibhav-22-dm/todoListServer/tasks/' + id)
        .then(res => res.json())
        .then(data => {
            setTitle(data.title)
            setDesc(data.desc)
            setDeadline(data.deadline)
            setIsFetched(false)
        })
    }


    
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        setTitle(document.getElementById('title').value)
        setDesc(document.getElementById('desc').value)
        setDeadline(document.getElementById('deadline').value)
        console.log(title, desc, deadline)
        fetch(`https://my-json-server.typicode.com/vaibhav-22-dm/todoListServer/tasks/` + id,
        {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({title:title,desc:desc,deadline:deadline,id:id})
        }).
        then(() => {
            console.log(title)
            console.log(1001)
            history.push("/todoReactJS/")})
        .catch((error) => {
            console.log(error)
        })
    }

    


    

    return ( 
        <form action="" id="editTask" onSubmit={handleSubmit}>
            <h2 style={{padding:"10px"}}>Edit Task</h2>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" 
            onChange={e => {setTitle(e.target.value)}} 
            value={title}
            />
            <label htmlFor="desc">Description</label>
            <textarea name="desc" id="desc" cols="30" rows="10" 
            onChange={e => {setDesc(e.target.value)}} value={desc}
            ></textarea>
            
            <div className="formend">
                <div className="deadlinebox">
                    <label htmlFor="deadline">Deadline</label>
                    <input type="text" name="deadline" id="deadline"
                     value={deadline} 
                     onChange={e => {
                         setDeadline(e.target.value)
                         console.log(deadline, e.target.value)
                        }}
                    />
                </div>
                <input type="submit" value="Edit" id="create" />
            </div>
        </form>
    );
}
 
export default Edit;