'use client'

import { useContext, useState } from 'react'
import { FormContext } from '..'
import styles from './styles.module.css'

interface InputProps {
  type: 'text' | 'password'
  name: string
  label: string
  placeholder?: string
  icon?: boolean
}

export function Input({ type, name, label, placeholder, icon }: InputProps) {
  const { formValues, setFormValues } = useContext(FormContext)!
  const [show, setShow] = useState(true)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }))
  }

  return (
    <div className={styles.inputContainer}>
      <input
        required
        className={styles.input}
        type={show ? type : 'text'}
        id={name}
        name={name}
        value={formValues[name] || ''}
        onChange={handleChange}
        placeholder={placeholder}
      />
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      {icon ? (
        <div
          onClick={() => setShow(!show)}
          id='Icon'
          className={show ? `${styles.Icon} ${styles.show} ` : `${styles.Icon} ${styles.hide}`}
        ></div>
      ) : null}
    </div>
  )
}
