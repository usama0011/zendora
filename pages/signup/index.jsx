import React, { useState } from 'react'
import styles from '../../styles/signup.module.css'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Image from 'next/image'

const Index = () => {
    const [fullName, setFullName] = useState("");
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatedPass, setRepeatedPass] = useState("");
    const [check, setCheck] = useState(null)
    const handleSubmitForm = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <NavBar />
            <div className={styles.signupContainer}>
                <div className={styles.ImageContainer}>
                    <Image src="/signup.jpg" alt='signupImage' fill />
                </div>
                <div className={styles.formContainer}>
                    <h1>Register Me</h1>
                    <form action="">
                        <input name='name' value={fullName} onChange={(e) => setFullName(e.target.value)} required type="text" placeholder='Name' />
                        <input type="text" required name='username' value={username} onChange={(e) => setUserName(e.target.value)} placeholder='Username' />
                        <input type="email" required name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
                        <input type="password" required name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
                        <input type="password" required name='repeatedPassword' value={repeatedPass} onChange={(e) => setRepeatedPass(e.target.value)} placeholder='Repeated Password' />
                        <div className={styles.checkboxContainer}>
                            <input value="checkbox" onChange={(e) => setCheck(e.target.checked)} type="checkbox" /> <span>I accept the term and Conditions</span>
                        </div>
                        <button onSubmit={handleSubmitForm}>Registraction</button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Index