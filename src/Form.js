
import { blue } from "@mui/material/colors";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import "./Form.css";
// import  from './CircularProgressWithLabel';

const Form = ({ add }) => {

    let [myErrors, setMyErrors] = useState({})

    let [myCustomer, setMyCustomer] = useState({
        id: "",
        name: "",
        sum: "",
        delection: "",
        date: ""

    })
    let navigate = useNavigate();
    const change = (e) => {
        let inputValue = e.target.value;
        let inputName = e.target.name;
        let inputValueSum = e.target.value;
        let inputSum = e.target.sum;
        let copy = { ...myCustomer, [inputName]: inputValue, [inputSum]: inputValueSum };
        setMyCustomer(copy);

    }
    const check = () => {
        let err = {};
        if (!myCustomer.name)
            err.name = 'שם זה שדה חובה'
        if (myCustomer.sum < 0)
            err.sum = 'נא להקיש סכום גבוה מ-0 שח'
        return err;

    }
    console.log(myCustomer)
    const mySubmit = (e) => {
        e.preventDefault();
        let resulrt = check();
        console.log("resulrt: " + resulrt)
        if (Object.keys(resulrt).length == 0) {
            JSON.stringify(myCustomer)
            myCustomer.date=new Date();
            add(myCustomer);
        }
        else
            alert(setMyErrors(resulrt))

        navigate("/all");
    }
 
    return (<> 
         <div className="form">           
        <form onSubmit={mySubmit}>            
            <input name="name" className={myErrors.name ? "not valid" : " "} type="text" onChange={change} placeholder="שם" /><br />
            {myErrors.name ? <span className="error-message">{myErrors.name}</span> : null}
            <input name="sum" className={myErrors.sum ? "not valid" : " "} type="text" onChange={change} placeholder=" סכום התרומה   " /><br />
            {myErrors.sum ? <span className="error-message">{myErrors.sum}</span> : null}
            <input name="delection" type="text" onChange={change} placeholder="  הקדשה" /><br />
            <input type="submit" />
        </form> 
        </div> 
        </>);

    {/* {/* <Link to="ashray" element={<Ashray/>}>פרטי אשראי</Link>   https://codepen.io/simoberny/pen/XgEgGg}* */ }

}

export default Form;

// ספריית עיצוב טופס 
//mui
//מדוע לא עבד? לא שלח מידע לרשימה, כן אוסיף

    // const theme = createTheme({
    //     direction: 'rtl',
    // });
    // const cacheRtl = createCache({
    //     key: 'muirtl',
    //     stylisPlugins: [prefixer, rtlPlugin],
    // });
// /* <CacheProvider value={cacheRtl}>
//                 <ThemeProvider theme={theme}>
//                     <div dir="rtl" >
//                         <input type="text" onChange={change} placeholder="שם" className={myErrors.name ? "not valid" : " "}  /><br/>
//                         {myErrors.name ? <span className="error-message">{myErrors.name}</span> : null}
//                         <input type="text" placeholder="סכום התרומה" className={myErrors.sum ? "not valid" : " "} onChange={change} /><br/>
//                         {myErrors.sum ? <span className="error-message">{myErrors.sum}</span> : null}
//                         <input type="text" placeholder="הקדשה" onChange={change} /><br/>
                        
//                     </div>
//             //     </ThemeProvider>
//             // </CacheProvider>


