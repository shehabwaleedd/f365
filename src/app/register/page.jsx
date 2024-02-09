'use client'

import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup'
import axios from 'axios';
import styles from "./page.module.scss"

const Register = () => {
    const [errorFromDataBase, setErrorFromDataBase] = useState('')
    let validationSchema = yup.object({
        name: yup.string().required(),
        email: yup.string().email().required(),
        password: yup.string().matches(/^(?=.*[A-Za-z])[A-Za-z\d]{6,}$/, 'at least 6 charchter and start with upperCase').required(),
        repeatPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
        phone: yup.string().required(),
        location: yup.string().required(),
        company: yup.string().required(),
        message: yup.string().required()
    })


    const registerFormik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            repeatPassword: '',
            phone: '',
            location: '',
            company: '',
            message: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values)
            axios.post('http://localhost:5000/register', values)
                .then(res => {
                    console.log(res)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    })


    const handleChange = (e) => {
        setRegisterForm({
            ...registerForm,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(registerForm)
    }



    return (
        <main className={styles.register}>


            <form action="" className={styles.register__form} onSubmit={registerFormik.handleSubmit}>
                <h1 className={styles.register__title}>Register</h1>
                <div className={styles.register__form__group}>
                    <input type="text" placeholder="Name" className={styles.register__input} name="name" onChange={registerFormik.handleChange} value={registerFormik.values.name} />
                    {registerFormik.errors.name ? <div className={styles.register__error}>{registerFormik.errors.name}</div> : null}
                    <input type="text" placeholder="Email" className={styles.register__input} name="email" onChange={registerFormik.handleChange} value={registerFormik.values.email} />
                    {registerFormik.errors.email ? <div className={styles.register__error}>{registerFormik.errors.email}</div> : null}
                </div>
                <div className={styles.register__form__group}>
                    <input type="password" placeholder="Password" className={styles.register__input} name="password" onChange={registerFormik.handleChange} value={registerFormik.values.password} />
                    {registerFormik.errors.password ? <div className={styles.register__error}>{registerFormik.errors.password}</div> : null}
                    <input type="password" placeholder="Repeat Password" className={styles.register__input} name="repeatPassword" onChange={registerFormik.handleChange} value={registerFormik.values.repeatPassword} />
                    {registerFormik.errors.repeatPassword ? <div className={styles.register__error}>{registerFormik.errors.repeatPassword}</div> : null}
                    <input type="text" placeholder="Phone" className={styles.register__input} name="phone" onChange={registerFormik.handleChange} value={registerFormik.values.phone} />
                    {registerFormik.errors.phone ? <div className={styles.register__error}>{registerFormik.errors.phone}</div> : null}
                </div>
                <div className={styles.register__form__group}>
                    <input type="text" placeholder="Location" className={styles.register__input} name="location" onChange={registerFormik.handleChange} value={registerFormik.values.location} />
                    {registerFormik.errors.location ? <div className={styles.register__error}>{registerFormik.errors.location}</div> : null}
                    <input type="text" placeholder="Company" className={styles.register__input} name="company" onChange={registerFormik.handleChange} value={registerFormik.values.company} />
                    {registerFormik.errors.company ? <div className={styles.register__error}>{registerFormik.errors.company}</div> : null}
                </div>
                <input type="text" placeholder="Message" className={styles.register__input} name="message" onChange={registerFormik.handleChange} value={registerFormik.values.message} />
                {registerFormik.errors.message ? <div className={styles.register__error}>{registerFormik.errors.message}</div> : null}
                <button type="submit" className={styles.register__btn}>Register</button>
            </form>

        </main>
    )
}

export default Register