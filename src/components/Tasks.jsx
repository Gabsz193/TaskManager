import React from "react";
import Task from "./Task";

const Tasks = (props) => {
    return (
        <>
            {props.tasks.map((task) => (
                <Task
                    key={task.id}
                    task={task}
                    handleTaskDelete={props.handleTaskDelete}
                    handleTaskClick={props.handleTaskClick}
                />
            ))}
        </>
    )
}

export default Tasks