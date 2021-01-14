import React from 'react'

export default function TaskList(props){
    const {tasks} = props
    return(
        <div>
            {tasks.length === 0 ? (
                <div>
                    <h1>No task found</h1>
                    <p>Add your first task </p>
                </div>
            ): (
                <div>
                    <h2>My tasks - {tasks.length}</h2>
                    
                </div>
            )}
        </div>
    )
}