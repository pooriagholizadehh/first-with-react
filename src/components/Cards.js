import React, { Component } from 'react'
import styles from "./Cards.module.css";
import Card from './Card';

import  phone1 from "../images/phone1.jpg";
import  phone2 from "../images/phone2.jpg";
import  phone3 from "../images/phone3.jpg";
import  phone4 from "../images/phone4.jpg";

export default class Cards extends Component {
    constructor(){
        super();
        this.state = {
            phoneData : [
                {image:phone1,name:"iphnex", cost:"200 $",id:1},
                {image:phone2 ,name:"iphnex11" ,cost:"560021 $",id:2},
                {image:phone3, name:"iphnex12", cost:"2350054 $",id:3},
                {image:phone4 ,name:"iphnex13", cost:"10750 $",id:4}
            ]
        }
    }
    render() {
        return (
            <div className={styles.container}>
                {/* <Card image={phone1} name="iphnex" cost="200 $"/>     
                <Card image={phone2} name="iphnex11" cost="560021 $"/>
                <Card image={phone3} name="iphnex32" cost="2350054 $"/>
                <Card image={phone4} name="iphnex12" cost="10750 $"/> */}
                {this.state.phoneData.map(phone =><Card
                 key={phone.name}
                  image={phone.image} 
                  name={phone.name} 
                  cost={phone.cost}
                  id={phone.id}
                  /> 
                  )}
            </div>
        )
    }
}
