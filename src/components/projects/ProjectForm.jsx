import React from "react";
import { useState, useEffect } from 'react'

import styles from './ProjectForm.module.css'

import Input from "../form/input";
import Select from "../form/Select";
import SubmitButton from '../form/SubmitButton';


function ProjectForm({btnText}){

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/categories', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((resp) => resp.json())
          .then((data) => {
            setCategories(data)
          })
      }, [])
    
      

    return(
        <form className={styles.form}>

            <Input type='text' text='Nome do projeto' name='name' placeholder='Insira o nome do projeto aqui.'/>

            <Input type='number' text='Orçamento do projeto' name='budget' placeholder='Insira o orçamento total do projeto aqui.'/>

            <Select name='category_id' text='Selecione a categoria' options={categories}/>

            <SubmitButton text={btnText}/> 

        </form>
    )
}

export default ProjectForm