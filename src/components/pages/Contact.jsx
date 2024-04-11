import React from "react";

import styles from './Contact.module.css'

function Contact(){
    return(
        <section className={styles.details}>            
                <h1>Como falar com a D'santos?</h1>           
            <article>
                <p><strong>E-mail: </strong>danielle.vtds@gmail.com</p>

                <p><strong>Telefone: </strong>(11) 91111-1111</p>

                <p><strong>GitHub: </strong><a href="https://github.com/DanielleSantosss" target="_blank">GitHub da empresa.</a></p>
                
                <p><strong>Linkedn: </strong><a href="https://www.linkedin.com/in/danielle-santos-3936bb1aa/" target="_blank">LinkedIn da empresa.</a></p>
            </article>
            
            <footer>
                
            <p>Precisa de alguma ajuda? <span>Não hesite em nos chamar!</span></p>

            </footer>
        </section>
    )
}

export default Contact