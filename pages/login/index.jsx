import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Head from 'next/head';

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import styles from '../../styles/login.module.css';
import WithLoginAuth from '@/components/LoginRedirect';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState(''); // Added state for error message
  const router = useRouter();

  useEffect(() => {
    const storedEmail = localStorage.getItem('rememberedEmail');
    const storedPassword = localStorage.getItem('rememberedPassword');
    const storedRememberMe = localStorage.getItem('rememberMe');

    if (storedEmail && storedRememberMe === 'true') {
      setEmail(storedEmail);
      setPassword(storedPassword);
      setRememberMe(true);
    }
  }, []);

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log('Login successful:', data);
        // Perform any necessary actions after successful login
        localStorage.setItem('user', JSON.stringify(data.data));
        setShowModal(true);
        setTimeout(() => {
          setShowModal(false);
          
          if (data.data.isAdmin) {
            router.push('/admin'); // Redirect to admin page
          } else {
            router.push('/'); // Redirect to home page
          }
        }, 1000);
      } else {
        console.error('Login failed:', data);
        setErrorMessage('Wrong email or password'); // Set error message
      }
    } catch (error) {
      console.error('Login failed:', error);
      setErrorMessage('Login failed. Please try again.'); // Set error message
    }

    if (rememberMe) {
      localStorage.setItem('rememberedEmail', email);
      localStorage.setItem('rememberedPassword', password);
      localStorage.setItem('rememberMe', 'true');
    } else {
      localStorage.removeItem('rememberedEmail');
      localStorage.removeItem('rememberedPassword');
      localStorage.removeItem('rememberMe');
    }
  };

  const handleCheckboxChange = (e) => {
    setRememberMe(e.target.checked);
  };

  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NavBar />
      <div className={styles.LoginContainer}>
        <div className={styles.ImageContainer}>
          <Image src="/signup.jpg" alt="signupImage" fill />
        </div>
        <div className={styles.formContainer}>
          <h1>Login</h1>
          <form onSubmit={handleSubmitForm}>
            <input
              type="email"
              required
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              type="password"
              required
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <div className={styles.errorMessage}>{errorMessage}</div> {/* Display error message */}
            <div className={styles.checkboxContainer}>
              <input
                checked={rememberMe}
                onChange={handleCheckboxChange}
                type="checkbox"
              />{' '}
              <span>Remember Me</span>
            </div>
            <button type="submit">LOGIN</button>
          </form>
        </div>
      </div>
      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Login Successful!</h2>
            <p>You have successfully logged in.</p>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default WithLoginAuth(Login);
