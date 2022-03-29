import React from 'react';
import styles from '../Inputs/input.module.css';

const TextInput = (props) => {

    return (
        <div className={`${styles.textInputWrapper}`}>
            <input type="text" className={`${styles.input_color} ${styles.text_input}`} />
            <label class={styles.rightLabel}> <span>{props.rightLabel}</span>
                {props.trashIcon && <i className='trash bi bi-trash-fill'></i>}
            </label>
        </div>
    )
}

export default TextInput;