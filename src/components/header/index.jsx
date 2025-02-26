import React from 'react';
import { Link } from "react-router-dom"
import styles from "./style.module.css"

const Header = () => {

    return <div className={styles.container}>
        <nav className={styles.navbar}>
            <Link to='/'><button className={styles.button}>Home</button></Link>
            <Link to='/about_website'><button className={styles.button}>About website</button></Link>
            <Link to='/todoList'><button className={styles.button}>Todo List</button></Link>
            <Link to='/ball_8'><button className={styles.button}>Fortune ball</button></Link>
        </nav>
    </div>
}

export default Header;