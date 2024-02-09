'use client'

import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup'
import axios from 'axios';
import styles from "./page.module.scss"
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Register = () => {
    const [errorFromDataBase, setErrorFromDataBase] = useState('')
    const [profilePic, setProfilePic] = useState(null);
    const router = useRouter();


    let validationSchema = yup.object({
        name: yup.string().required(),
        email: yup.string().email().required(),
        password: yup.string().matches(/^(?=.*[A-Za-z])[A-Za-z\d]{6,}$/, 'at least 6 charchter and start with upperCase').required(),
        repeatPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
        phone: yup.string().required(),
        location: yup.string().required(),
        company: yup.string().required(),
    })

    const handleProfilePicChange = (event) => {
        setProfilePic(event.currentTarget.files[0]);
    };

    const registerFormik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            repeatPassword: '',
            phone: '',
            location: '',
            company: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values, { setSubmitting }) => {
            const formData = new FormData();
            Object.keys(values).forEach(key => formData.append(key, values[key]));
            if (profilePic) formData.append('profilePic', profilePic);

            axios.post('http://localhost:3000/user/register', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            })
            .then(response => {
                localStorage.setItem('token', response.data.token);
                setSubmitting(false);
                router.push('/');
            })
            .catch(error => {
                setErrorFromDataBase(error.response?.data.message || 'An error occurred');
                setSubmitting(false);
            });
        },

    })


    return (
        <main className={styles.register}>


            <form className={styles.register__form} onSubmit={registerFormik.handleSubmit}>
                <h1 className={styles.register__title}>Register</h1>
                <div className={styles.register__form__group}>
                    <div className={styles.register__form__group_column}>
                        <label htmlFor="name">
                            Name
                        </label>
                        <input type="text" placeholder="Name" className={styles.register__input} name="name" onChange={registerFormik.handleChange} value={registerFormik.values.name} />
                    </div>
                    <div className={styles.register__form__group_column}>
                        <label htmlFor="email">
                            Email
                        </label>
                        <input type="email" placeholder="Email" className={styles.register__input} name="email" onChange={registerFormik.handleChange} value={registerFormik.values.email} />
                    </div>
                </div>
                {registerFormik.errors.name ? <div className={styles.register__error}>{registerFormik.errors.name}</div> : null}
                {registerFormik.errors.email ? <div className={styles.register__error}>{registerFormik.errors.email}</div> : null}
                <div className={styles.register__form__group}>
                    <div className={styles.register__form__group_column}>
                        <label htmlFor="password"> Password</label>
                        <input type="password" placeholder="Password" className={styles.register__input} name="password" onChange={registerFormik.handleChange} value={registerFormik.values.password} />
                    </div>
                    <div className={styles.register__form__group_column}>
                        <label htmlFor="password">Repeat Password</label>
                        <input type="password" placeholder="Repeat Password" className={styles.register__input} name="repeatPassword" onChange={registerFormik.handleChange} value={registerFormik.values.repeatPassword} />
                    </div>
                    <div className={styles.register__form__group_column}>
                        <label htmlFor="text"> Phone </label>
                        <input type="text" placeholder="Phone" className={styles.register__input} name="phone" onChange={registerFormik.handleChange} value={registerFormik.values.phone} />
                    </div>
                </div>
                {registerFormik.errors.password ? <div className={styles.register__error}>{registerFormik.errors.password}</div> : null}
                {registerFormik.errors.repeatPassword ? <div className={styles.register__error}>{registerFormik.errors.repeatPassword}</div> : null}
                {registerFormik.errors.phone ? <div className={styles.register__error}>{registerFormik.errors.phone}</div> : null}
                <div className={styles.register__form__group}>

                    <div className={styles.register__form__group_column}>
                        <label htmlFor="text"> Location </label>
                        <input type="text" placeholder="Location" className={styles.register__input} name="location" onChange={registerFormik.handleChange} value={registerFormik.values.location} />
                    </div>

                    <div className={styles.register__form__group_column}>
                        <label htmlFor="text"> Company </label>
                        <input type="text" placeholder="Company" className={styles.register__input} name="company" onChange={registerFormik.handleChange} value={registerFormik.values.company} />
                    </div>

                </div>
                {registerFormik.errors.location ? <div className={styles.register__error}>{registerFormik.errors.location}</div> : null}
                {registerFormik.errors.company ? <div className={styles.register__error}>{registerFormik.errors.company}</div> : null}

                <div className={styles.register__form__group}>
                    <div className={styles.register__form__group_column}>
                        <label htmlFor="profilePic">Profile Picture</label>
                        <input type="file" id="profilePic" name="profilePic" onChange={handleProfilePicChange} />
                        {profilePic ? <Image src={URL.createObjectURL(profilePic)} alt="profilePic" className={styles.register__profilePic} width={50} height={50}/> : null}
                        {registerFormik.errors.profilePic ? <div className={styles.register__error}>{registerFormik.errors.profilePic}</div> : null}
                    </div>

                </div>

                <button type="submit" className={styles.register__btn}>Register</button>
                <Link href="/login"> <span className={styles.register__login}>Already have an account? Login</span></Link>
            </form>
            {errorFromDataBase ? <div className={styles.register__error}>{errorFromDataBase}</div> : null}



        </main>
    )
}

export default Register