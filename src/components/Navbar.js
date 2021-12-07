import React from 'react';
import styles from "./Navbar.module.css";
import Logo from "../images/logo.png";
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <header className={styles.header} >
            <div className={styles.listContainer}>
                <ul className={styles.list}>
                    <li><Link to="/">Home page</Link></li>
                    <li><Link to="/products">Product</Link></li>
                    <li><Link to="/aboutus">About us</Link></li>
                </ul>
            </div>
            <div className={styles.logo}>
                <img className={styles.logo} src={Logo} alt="logo"/>
            </div>
        </header>
    )
}
