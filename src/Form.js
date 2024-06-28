
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";

const Form = ({ add }) => {

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
    let [myErrors, setMyErrors] = useState({
    })
    const check = () => {
        let err = {};
        if (!myCustomer.name)
            err.name = 'שם זה שדה חובה'
        if (myCustomer.sum < 0)
            err.sum = 'נא להקיש סכום גבוה מ-0 שח'
        return err;
    }
    const mySubmit = (e) => {
        e.preventDefault();
        let resulrt = check();
        console.log("resulrt: " + resulrt)
        if (Object.keys(resulrt).length == 0) {
           JSON.stringify(myCustomer)
          myCustomer.date=new Date();
            add(myCustomer);}
        else
            setMyErrors(resulrt)
        navigate("/all");
    }
 
    return (<> 
         <div className="form">   
               
        <form onSubmit={mySubmit}>            
            <input name="name" className={myErrors.name ? "not valid" : " "} type="text" onChange={change} placeholder="שם" /><br />
            {myErrors.name!=undefined ? <span className="error-message">{myErrors.mame}</span> : null}
            <input name="sum" className={myErrors.sum ? "not valid" : " "} type="text" onChange={change} placeholder=" סכום התרומה   " /><br />
            {myErrors.sum !=undefined? <span className="error-message">{myErrors.sum}</span> : null}
            <input name="delection" type="text" onChange={change} placeholder="  הקדשה" /><br />
            <input type="submit" />
        </form> 
        </div> 
        </>);


}

export default Form;
