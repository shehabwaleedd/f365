'use client'

import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup'
import axios from 'axios';
import Link from 'next/link';
import styles from "./page.module.scss"



const Page = () => {
    const [errorFromDataBase, setErrorFromDataBase] = useState('')
    let validationSchema = yup.object({
        email: yup.string().email().required(),
        password: yup.string().matches(/^(?=.*[A-Za-z])[A-Za-z\d]{6,}$/, 'at least 6 charchter and start with upperCase').required(),

    })



    const [isLoading, setisLoading] = useState(false)
    const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://api.example.com'


    const LoginFormik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema,
        onSubmit: async values => {
            setisLoading(true)
            await axios.post(`${baseUrl}/auth/login`, values).then((data) => {
                console.log(data.data.token);
                localStorage.setItem('token', data.data.token)
                setisLoading(false)
                navigate('/')
            }).catch((err) => {
                setErrorFromDataBase(err.response.data.message)
                setisLoading(false)
            })

        },
    });


    return (
        <div className={styles.container}>
            <form onSubmit={LoginFormik.handleSubmit} className={styles.form}>
                <h1 className={styles.title}>Login</h1>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={LoginFormik.handleChange}
                    value={LoginFormik.values.email}
                    className={styles.input}
                />
                {LoginFormik.errors.email ? <div className={styles.error}>{LoginFormik.errors.email}</div> : null}
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={LoginFormik.handleChange}
                    value={LoginFormik.values.password}
                    className={styles.input}
                />
                {LoginFormik.errors.password ? <div className={styles.error}>{LoginFormik.errors.password}</div> : null}
                <button type="submit" className={styles.button}>Login</button>
                {errorFromDataBase ? <div className={styles.error}>{errorFromDataBase}</div> : null}
            </form>

            <div className={styles.link}>
                <Link href="/register">
                    <span>Don&apos;t have an account? Sign up</span>
                </Link>
            </div>

        </div>

    )
}

export default Page