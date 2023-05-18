import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import React, { useState } from 'react'
import styles from '../../styles/login.module.css'
import Image from 'next/image'
const Index = () => {
   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [check, setCheck] = useState(null)
    const handleSubmitForm = (e) => {
        e.preventDefault();
    }
    return (
        <>
        <NavBar/>
        <div className={styles.LoginContainer}>
                <div className={styles.ImageContainer}>
                    <Image src="/signup.jpg" alt='signupImage' fill />
                </div>
                <div className={styles.formContainer}>
                    <h1>Login</h1>
                    <form action="">
                        <input type="email" required name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
                        <input type="password" required name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
                        <div className={styles.checkboxContainer}>
                            <input value="checkbox" onChange={(e) => setCheck(e.target.checked)} type="checkbox" /> <span>Remember me pass</span>
                        </div>
                        <button onSubmit={handleSubmitForm}>Login Me</button>
                    </form>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Index