import React from 'react';
import styles from "./style.module.css"

const Square = ({ value, onClick }) => {

    return <button className={styles.square} onClick={onClick}>{value}</button>;  
    
}

export default Square;