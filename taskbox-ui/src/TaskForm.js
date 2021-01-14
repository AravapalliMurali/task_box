import React,{useState} from 'react'
import {v4 as uuidv4} from 'uuid'

export default function TaskForm(props){
    const [title, setTitle] = useState('')
    const [status , setStatus] = useState(false)
    const [id, setId] = useState(uuidv4())

    const handleTitle =(e) =>{
        setTitle(e.target.value)
    }

    const handleStatus =(e) =>{
        setStatus(e.target.checked)
    }

    const handleSubmit =(e) =>{
        e.preventDefault()
        
        const formDta = {
            id:id,
            title:title,
            status:status
        }
        console.log(formDta)
        
    }

    return(
        <div>
            <form onSubmit ={handleSubmit}>
                <label>Title</label><br/>
                <input type ="text" value ={title} onChange ={handleTitle}/> <br/>

                <input type ="checkbox" checked = {status} onChange ={handleStatus}/><label>completed</label><br/>

                <input type ="submit" value ="save"/>
            </form>
        </div>
    )
}