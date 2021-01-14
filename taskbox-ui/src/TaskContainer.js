import React from 'react'
import TaskList from './TaskList'
import TaskForm from './TaskForm'

export default function TaskContainer(props){
    return (
        <div>
            <TaskList/>
            <TaskForm/>
        </div>
    )
}