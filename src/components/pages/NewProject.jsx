import React from "react";
import ProjectForm from '../projects/ProjectForm'
import styles from './NewProject.module.css'

import { useNavigate } from "react-router-dom";


function NewProject(){

    const navigate = useNavigate();

    function createPost(project) {
        //initialize cost and services
        project.cost= 0;
        project.services = [];

        fetch("http://localhost:5000/projects", {
            method: "POST",
            headers: {"Content-Type": "aplication/json"},
            body: JSON.stringify(project)
        }).then((response) => response.json())
          .then((data) => {
            const state = { message: "Projeto criado com sucesso!" };
            navigate("/projects", {state});
          })
          .catch((error => console.log(error)))
    }


    return(
        <div className={styles.newProjectContainer}>
            <h1>Criar um novo projeto</h1>
            <p>Crie seu projeto para em seguida adicionar os serviços.</p>
            <p><ProjectForm handleSubmit={createPost} btnText='Criar Projeto'/></p>
        </div>
    )
}

export default NewProject