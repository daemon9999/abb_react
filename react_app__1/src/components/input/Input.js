import React from 'react'
import styles from './Input.module.scss'
import { useField } from 'formik'
import {  PatternFormat } from "react-number-format"

const Input = ({ label, ...props }) => {
    const [field, meta] = useField(props);





    return (
        <div>
            <label className={styles['input']}>
                <span className={`${styles['input__label']} ${field.value && styles['constant__label']}`}>{label}</span>
                {props.name === 'phoneNumber' ? (
                    <PatternFormat format='(###)###-##-##' mask={'#'} className={`${styles['input__container']} ${field.value && styles['constant__input']}`}   {...field} {...props} />
                ) : (
                    <input
                        type='text'
                        className={`${styles['input__container']} ${field.value && styles['constant__input']}`}
                        min={4}
                        {...field}
                        {...props}
                        value={(!!(props.type === 'number') && !!(field.value === 0)) ? '' : field.value}
                    />
                )}
            </label>
            {meta.touched && meta.error ? <p className={styles['input__error']}>{meta.error}</p> : null}

        </div>
    )

}

export default Input