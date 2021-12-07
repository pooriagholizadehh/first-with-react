import React, { Component } from 'react';
import styles from "./Card.module.css";
import { Link } from 'react-router-dom';
import down from "../images/down.svg"
import up from "../images/up.svg"

export default class Card extends Component {
    constructor(){
        super();
        this.state = {
            counter :0,
        }
    }
    downHandler = ()=> {
        if(this.state.counter>=1){
        this.setState((prevState) =>({
            counter :prevState.counter-1,
        }))
      }
    } 
    upHandler = ()=> {
        this.setState((prevState) =>({
            counter :prevState.counter+1,
        }))
    } 
    render() {
        const {image,name,cost,id}=this.props;
        const {counter} = this.state;
        return (
            <div className={styles.container}>
                <img src={image}  alt="img"/>
                <h3 className={styles.h3}><Link to={`/products/${id}`}>{name}</Link></h3>
                <p  className={styles.p}>{cost}{counter ?  `* ${counter} = ${counter *Number(cost.split(" ")[0])} $`: ""}</p>
                <div className={styles.counter}>
                    <img className={!this.state.counter ? styles.deactive:""} src={down} alt="arrow" onClick={this.downHandler}/>
                    <span>{counter}</span>
                    <img  src={up} alt="arrow" onClick={this.upHandler}/>
                </div>
            </div>
        )
    }
}
