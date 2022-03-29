import React from 'react';
import styles from '../Inputs/input.module.css'

const ComponentInput = (props) => {

    return (
        <div>
            <textarea placeholder="Add Description" className={`${styles.comp_first_input} ${styles.text_input} ${styles.input_color}`} />
        </div>
    )
}

export default ComponentInput;