import React from 'react';
import styles from "./style.module.css"
import patric from "../images/patric.jpg" 

const Home = () =>{
    return <div className={styles.home}>
        <label className={styles.label}>Приветствую вас на моем сайте!</label>
        <img className={styles.img} src={patric} alc="патрик" />
        
    </div>
};

export default Home;