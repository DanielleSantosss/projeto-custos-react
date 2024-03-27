import React from  'react';
import { useParams } from 'react-router-dom';
import {useState, useEffect}  from "react";


import styles from './Project.module.css'

function Project(){
    
    const {id} = useParams()

    const [project, setProject] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(response => response.json())
        .then(data => {
            setProject(data);
        })
        .catch(err => {
            console.error('Error fetching project:', err);
        });
    }, [id]);

    return(
        <p>{project.name}</p>
    )

}

export default Project;