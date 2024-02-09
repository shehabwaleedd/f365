'use client'

import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup'
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from "./page.module.scss"



const Page = () => {
    const [errorFromDataBase, setErrorFromDataBase] = useState('')
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    let validationSchema = yup.object({
        email: yup.string().email().required(),
        password: yup.string().matches(/^(?=.*[A-Za-z])[A-Za-z\d]{6,}$/, 'at least 6 charchter and start with upperCase').required(),

    })
    const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://api.example.com'



    const loginFormik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema,
        onSubmit: async (values) => {
            setIsLoading(true);
            try {
                const response = await axios.post(`${baseUrl}/auth/login`, values);
                localStorage.setItem('token', response.data.token);
                router.push('/'); // Navigate to the home page
            } catch (err) {
                setErrorFromDataBase(err.response?.data.message || 'An error occurred');
            } finally {
                setIsLoading(false);
            }
        },
    });

    return (
        <div className={styles.container}>
            <form onSubmit={loginFormik.handleSubmit} className={styles.form}>
                <h1 className={styles.title}>Login</h1>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={loginFormik.handleChange}
                    value={loginFormik.values.email}
                    className={styles.input}
                />
                {loginFormik.errors.email && <div className={styles.error}>{loginFormik.errors.email}</div>}
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={loginFormik.handleChange}
                    value={loginFormik.values.password}
                    className={styles.input}
                />
                {loginFormik.errors.password && <div className={styles.error}>{loginFormik.errors.password}</div>}
                <button type="submit" className={styles.button} disabled={isLoading}>{isLoading ? 'Logging in...' : 'Login'}</button>
                {errorFromDataBase && <div className={styles.error}>{errorFromDataBase}</div>}
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