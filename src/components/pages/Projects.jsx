import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";


import Message from "../layout/Message";
import Container from "../layout/Container"
import LinkButton from "../layout/LinkButton";
import ProjectCard from "../projects/ProjectCard";
import Loading from "../layout/Loading";

import styles from "./Projects.module.css"

function Projects(){

    const [projects, setProjects] = useState([]);
    const [removeLoading, setRemoveLoading] = useState(false);
    const [projectMessage, setProjectMessage] = useState('')

    const location = useLocation()
    let message = ''
    if(location.state){
        message = location.state.message
    }

    useEffect(() => {
        setTimeout(() => {

            fetch('http://localhost:5000/projects', {

                method: 'GET',
                headers:{
            'Content-Type': 'application/json'
        },
    })
        .then(response => response.json())
        .then((data) =>{
            setProjects(data)
            setRemoveLoading(true)
        })
        .catch((error) => console.log(error))

        }, 300)
    }, [])


    function removeProject(id) {
        fetch(`http://localhost:5000/projects/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((resp) => resp.json())
          .then((data) => {
            setProjects(projects.filter((project) => project.id !== id))
            setProjectMessage('Projeto removido com sucesso!')
          })
      }

    return(
        <div className={styles.projectContainer}>          
            <div className={styles.titleContainer}>
                <h1>Meus Projetos</h1>
                <LinkButton to="/newproject" text="Criar Projeto"/>
            </div>
            {message && <Message type="success" msg={message}/>}
            {projectMessage && <Message type="success" msg={projectMessage}/>}
            <Container customClass="start">
            {projects.length > 0 &&
                projects.map((project) => (
                 <ProjectCard
                    id={project.id}
                    name={project.name}
                    budget={project.budget}
                    category={project.category ? project.category.name: 'Categoria não encontrada.'}
                    key={project.id}
                    handleRemove={removeProject}
                />
          ))}
            {!removeLoading && <Loading/>}
            {removeLoading && projects.length === 0 && (
                <p>Não há nenhum projeto cadastrado.</p>
            )}
            </Container>
        </div>
    )
}

export default Projects;