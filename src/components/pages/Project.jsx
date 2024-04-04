import React from  'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";

import Loading from '../layout/Loading'
import Container from '../layout/Container'
import ProjectForm from '../projects/ProjectForm'
import Message from '../layout/Message'

import styles from './Project.module.css'

function Project() {
    
    const {id} = useParams()

    const [project, setProject] = useState([])

    const [showProjectForm, setProjectForm] = useState(false)

    const [message, setMessage] = useState('')

    const [type, setType] = useState('')

    const [showServiceForm, setServiceForm] = useState(false)

    useEffect(() => {
        setTimeout(() => {
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
        }, 300)
    }, [id])

    function editPost(project) {
        setMessage('')
        // budget validation
        if (project.budget < project.cost) {
            setTimeout(() => {
                setMessage('O orçamento não pode ser menor que o custo do projeto.')
                setType('error')
            },1)

            return true
        }

        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then((data) => {
            setProject(data);
            setProjectForm(false);
            setMessage('Projeto atualizado.')
            setType('success')
        })
        .catch((error) => console.log(error));
    }
        
    function toggleProjectForm() {
        setProjectForm(!showProjectForm);
    }

    function toggleServiceForm() {
        setServiceForm(!showServiceForm);
    }
    return(
        <>
            {project.name ? (
                <div className={styles.projectDetails}>
                    <Container customClass="column">
                        {!!message && <Message type={type} msg={message}/>}
                        <div className={styles.detailsContainer}>
                            <h1>Projeto: {project.name}</h1>
                            
                            <button className={styles.button} onClick={toggleProjectForm}>
                                {!showProjectForm ? 'Editar Projeto' : 'Fechar'}
                            </button>
                        </div>
                        {!showProjectForm ? (
                            <div className={styles.form}>
                                <p>
                                    <span>Categoria:</span> {project.category.name}
                                </p>
                                <p>
                                    <span>Total de Orçamento:</span> R${project.budget}
                                </p>
                                <p>
                                    <span>Total Utilizado:</span> R${project.cost}
                                </p>
                            </div>
                        ) : (
                            <div className={styles.form}> 
                                <ProjectForm handleSubmit={editPost} btnText="Concluir edição" projectData={project}/>
                            </div>
                        )}
                            <div className={styles.serviceFormContainer}>
                                <h2>Adicione um serviço:</h2>
                                <button className={styles.button} onClick={toggleServiceForm}>
                                {!showServiceForm ? 'Adicionar Projeto' : 'Fechar'}
                                </button>
                            </div>
                            <div className={styles.form}>
                                {showServiceForm && <div>formulário do projeto</div>}
                            </div>
                            <h2>Serviços</h2>
                            <Container customClass="start">
                                <p>Itens de Serviço</p>
                            </Container>
                    </Container>
                </div>
            ) : ( 
                <Loading/>
            )}       
        </>
    );
}

export default Project;