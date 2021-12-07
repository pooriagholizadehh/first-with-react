import React from 'react'
//import {useHistory} from "reacte-router-dom" in v-5
//in v-6
//import { useNavigate } from 'react-router-dom'
import { Link,Outlet} from 'react-router-dom';
 const AboutUs =() => {
     //in v-5
    // const history = useHistory()
    //history.replace('/') 
    //const navigate = useNavigate();
    // const clickHandler = () =>{
    //    baraie replace -> navigate('/',{replace:true});
    //    mamoli -> navigate('/');
    //    baraie bargasht b safhe ghabl k bodim    navigate(-1);
    //    baraie bargasht b safhe baad k bodim    navigate(-1);
    // }
        return (
            <div>
                <Outlet/>
               <h1> AboutUs </h1>
               {/* <button onClick={clickHandler}>GO Hme</button> */}
               <ul>
                   <li><Link to="programmers">programmers</Link></li>
                   <li><Link to="drivers">drivers</Link></li>
               </ul>
               
            </div>
        )
}
export default AboutUs