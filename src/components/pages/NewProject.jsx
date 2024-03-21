import React from "react";
import ProjectForm from '../projects/ProjectForm'
import styles from './NewProject.module.css'


function NewProject(){
    return(
        <div className={styles.newProjectContainer}>
            <h1>Criar um novo projeto</h1>
            <p>Crie seu projeto para em seguida adicionar os serviços.</p>
            <p><ProjectForm btnText='Criar Projeto'/></p>
        </div>
    )
}

export default NewProject