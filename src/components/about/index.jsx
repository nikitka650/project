import React from 'react';
import styles from "./style.module.css"
import man from "../images/man.jpg"

const About = () => {
    return <div className={styles.about}>
        <div className={styles.label}>
            <label>
                Этот сайт был сдела в ходе<br/>
                исследовательского проекта.<br/>
                Гипотезой которого была сможет<br/>
                ли обычный человек сделать <br/>
                свой сайт и понять всю его структуру. 
            </label>
            <label>
                Сверху вы можете переключаться по вкладкам сайта.<br/>
                Home это домашняя страница. About website это маршрутный <br/>
                лист по сайту. Todo List это список дел который вы можете <br/>
                дополнять. Fortune ball это шар восьмерка или же шар <br/>
                предсказаний. напишите в поле ввода ваш вопрос и шар ответит вам на него.
            </label>
        </div>
        <img className={styles.img} src={man} alt="думающий человечек" />
    </div>
};

export default About;