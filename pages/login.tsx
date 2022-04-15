import styles from '../styles/Home.module.scss'
import React, { useState } from "react";
import Home from '.';
import Link from 'next/link';

export default function login() {
return (
    <main className={styles.main}>
     <div className= {styles.card}>
         {/* <a href="/">Home</a> */}
         <div className= {styles.signin}> 
           <h2>create an account</h2>
           <br />
           <div className={styles.label}>
    <label>
      Full Name
      </label>
      <br />
      <input type="text" name="name" /> 
  </div>
  <div className={styles.label}>
    <label>
      Phone no
      </label>
      <br />
      <input type={'number'} name="email" /> 
  </div>
  <div className={styles.label}>
    <label>
      Email
      </label>
      <br />
      <input type="email" name="email" /> 
  </div>
  <div className={styles.label}>
    <label>
      Password
    </label><br />
      <input type="password" name="password" />
  </div>
  <div className={styles.label}>
    <label>
     Confirm Password
    </label><br />
      <input type="password" name="password" />
  </div>
  <div className={styles.loga}>
    <link href="/login" className={styles.signin}>Register</link>
    </div>
    <br />
    <div>
            <p>Already Registered?</p><br />
           <p><link href="/" className={styles.signup}>login </link></p>
          </div>
    
       </div>   
          </div>
          </main>
)
}
