import React from 'react'
import styles from "./Banner.module.css";
import logo from "../images/Banner.jpg";
export default function Banner() {
    return (
        <div className={styles.container}>
            <img src={logo} alt="Banner"/>
            <div className={styles.textContainer}>
                <h1>Arenadesign</h1>
                <p>
                    we are design <span>Logo</span>
                </p>
            </div>
        </div>
    )
}
