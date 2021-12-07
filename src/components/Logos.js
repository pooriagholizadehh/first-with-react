import React from 'react';
import styles from "./Logos.module.css"; 

import apple from "../images/logo.png";
import huawei from "../images/Huawei.jpg";


export default function Logos() {
    return (
        <div className={styles.container}>
            <h3>Who support us?</h3>
            <div>
                <img src={apple} alt="logos"/>
                <img src={huawei} alt="logos"/>
                <img src={apple} alt="logos"/>
            </div>
        </div>
    )
}
