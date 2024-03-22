import React from 'react'
import Button from './Button';
import { useNavigate, useParams } from 'react-router-dom';
import './TaskDetails.css'

const TaskDetails = () => {
    const params = useParams()
    const navigate = useNavigate()

    const handleBackClick = () => {
        navigate("/")
    }

    return ( 
        <>
            <div className="back-button-container">
                <Button onClick={handleBackClick}>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi commodi vero, quia enim sed aperiam aspernatur possimus mollitia amet accusantium. Quasi eaque molestias dolores tenetur aperiam doloremque maiores minus at.</p>
            </div>
        </>
     );
}
 
export default TaskDetails;