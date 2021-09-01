import { useHistory } from 'react-router-dom'
import { useState } from 'react'

const Create = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;

    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [deadline, setDeadline] = useState('')
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`https://my-json-server.typicode.com/vaibhav-22-dm/todoListServer/tasks/`,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({title:title,desc:desc,deadline:deadline,creationdate:today,status:'incomplete'})
        }).
        then(() => {history.push("/todoListServer/")})
    }



    return ( 
        <form action="" id="createTask" onSubmit={handleSubmit}>
            <h2 style={{padding:"10px"}}>Create Task</h2>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" onChange={(e) => {setTitle(e.target.value)}} />
            <label htmlFor="desc">Description</label>
            <textarea name="desc" id="desc" cols="30" rows="10" onChange={(e) => {setDesc(e.target.value)}} ></textarea>
            
            <div className="formend">
                <div className="deadlinebox">
                    <label htmlFor="deadline">Deadline</label>
                    <input type="date" name="deadline" id="deadline" onChange={(e) => {setDeadline(e.target.value)}}  />
                </div>
                <input type="submit" value="Create" id="create"/>
            </div>
        </form>
    );
}
 
export default Create;