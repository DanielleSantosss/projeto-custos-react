import React from "react";
import styles from './SubmitButton.module.css'

function Submit({text}){
    return(
        <div>
            <button className={styles.button}>{text}</button>
        </div>
    )
}

export default Submit;