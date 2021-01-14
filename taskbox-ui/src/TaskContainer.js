import React,{useState} from 'react'
import TaskList from './TaskList'
import TaskForm from './TaskForm'

export default function TaskContainer(props){
    const [tasks , setTasks] = useState([])
    
    return (
        <div>
            <TaskList tasks={tasks}/>
            <TaskForm/>
        </div>
    )
}