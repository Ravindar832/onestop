import styles from '../styles/Home.module.css'
import React, { useState } from "react";
import Home from '.';

export default function dashboard() {
return(
    <div className={styles.dashboard}>
        <h3>Admin Dashboard</h3>
    <div className={styles.container1}>
        <div className={styles.navigation_bar}>
    <nav className={styles.job}>
        <a href="#">Jobs</a><br /><br />
        <a href="#">Candidates</a><br /><br />
        <a href="#">Contact</a><br /><br />
        <a href="#">About</a><br /><br />
        <a href="#" id="menu-icon"></a>
        
    </nav>
  </div>
</div>
    </div>
)
}