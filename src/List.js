import { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import Edit from "./Edit";
import {Link} from 'react-router-dom'
const List = () => {
    const [tasks, setTasks] = useState(null) ;
    const getTasks = () => {
        fetch('https://my-json-server.typicode.com/vaibhav-22-dm/todoListServer/tasks/').
        then(res=>res.json())
        .then(data=>{
            setTasks(data)
        })
        return 0
    }
    const history = useHistory()
    const deleteTasks = (ele) => {
        fetch(`https://my-json-server.typicode.com/vaibhav-22-dm/todoListServer/tasks/${ele}`,
        {
            method: 'DELETE'
        }).
        then(() => {
            getTasks()
            history.push("/todoReactJS/")
        })
    }

    const updateTasks = (ele) => {
        const row = document.querySelectorAll('tr')[ele]
        const target = row.children[5]
        const last = target.firstChild
        console.log(last)
        if(last.checked){
            console.log(1)
            var status = 'completed'
        }
        else{
            status = 'incomplete'
            console.log(2)
        }

        fetch(`https://my-json-server.typicode.com/vaibhav-22-dm/todoListServer/tasks/${ele}`,
        {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({status:status})
        }).
        then(() => {
            getTasks()
            history.push("/todoReactJS/")
        })
    }

    useEffect(()=>{
        getTasks()
    },[])
    
    

    return ( 
            <table>
                <thead>
                    <tr>
                        <th>Sr.No.</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Deadline</th>
                        <th>Creation Date</th>
                        <th>Status</th>
                        <th>op1</th>
                        <th>op2</th>
                    </tr>
                </thead>
                <tbody>
                {tasks && tasks.map((task) => (
                    <tr key={task.id}>
                        <td style={{textAlign: 'center'}}>{task.id}</td>
                        <td>{task.title }</td>
                        <td>{task.desc}</td>
                        <td>{task.deadline}</td>
                        <td>{task.creationdate}</td>
                        <td style={{textAlign: 'center'}}>
                            {task.status === 'completed' && <input type="checkbox" name="" id="" defaultChecked onClick={() => {updateTasks(task.id)}}/>}
                            {task.status === 'incomplete' && <input type="checkbox" name="" id="" onClick={() => {updateTasks(task.id)}}/>}
                            {task.status}
                        </td>
                        <td>
                            <Link to={
                                {
                                    pathname:`/todoReactJS/edit/${task.id}`,
                                    // props:{
                                    //     task:task
                                    // }
                                }
                            }  style={{padding: '5px'}
                            }>Edit
                            </Link>
                        </td>
                        <td><button style={{padding: '5px'}} onClick={() => {deleteTasks(task.id)}}>Delete</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
    );
}
 
export default List;