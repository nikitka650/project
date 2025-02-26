import React from 'react';
import styles from "./style.module.css"
import man from "../images/man.jpg"

const About = () => {
    return <div className={styles.about}>
        <label className={styles.label}>
            Этот сайт был сдела в ходе<br/>
            исследовательского проекта.<br/>
            Гипотезой которого была сможет<br/>
            ли обычный человек сделать <br/>
            свой сайт и понять всю его структуру. 
        </label>
        <img className={styles.img} src={man} alt="думающий человечек" />
    </div>
};

export default About;