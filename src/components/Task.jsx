import React from 'react'
import { 
    IoIosCloseCircleOutline as DeleteIcon,
    IoIosInformationCircleOutline as InfoIcon
 } from "react-icons/io"
import { useNavigate } from 'react-router-dom'
import "./Task.css"

const Task = (props) => {
    const navigate = useNavigate()

    const handleDetailsClick = () => {
        navigate(`/${props.task.title}`)
    }

    return (
        <div className='task-container' style={props.task.completed ? {borderLeft: "6px solid chartreuse"} : {}}>
            <p className='task-title' onClick={() => props.handleTaskClick(props.task.id)}>{props.task.title}</p>
            <div className='task-options'>
                <InfoIcon style={{cursor: "pointer", color: "chartreuse"}} size={30} onClick={handleDetailsClick}/>
                <DeleteIcon style={{cursor: "pointer", color: "chartreuse"}} onClick={() => props.handleTaskDelete(props.task.id)} size={30}/>
            </div>
        </div>
    )

}
 
export default Task