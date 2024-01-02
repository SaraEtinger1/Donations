
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import List from './List';
import Form from './Form';
import NavBar from './NavBar';
import { useEffect, useState } from "react";
import ChooseCoin from './ChooseCoin';
import axios from "axios";
import Button from '@mui/material/Button';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import CircularWithValueLabel from './CircularProgressWithLabel';
import { createContext } from 'react';
import DonationItem from './DonationItem';

export const MyCurrentCoinContext = createContext();

function App() {
  let destination = 50000;

  let [contribution, setContribution] = useState([
    { id: 1, name: "משה כהן", sum: 50, delection: " להצלחת הפרויקט", date: new Date(2023, 11, 15) },
    { id: 2, name: "אנונימי", sum: 550, delection: " להצלת עם ישראל ולהחזרת החטופים", date: new Date(2023, 10, 17) }
  ])
  // const [DollarRate, setDollarRate] = useState(undefined);
  // const [coinIsDollar, setCoinIsDollar] = useState(false);
  // useEffect(() => {
  //   axios.get(" https://v6.exchangerate-api.com/v6/664d05a0b1705ce79cdb52df/latest/USD")
  //     .then(res => {
  //       alert(res.data.conversion_rates.ILS);
  //       setDollarRate(res.data.conversion_rates.ILS)
  //       console.log(res.data)
  //     })
  //     .catch(err => {
  //       console.log(err);
  //       alert("אא להציג את האתר בדולרים")
  //     })
  // }, [])

  let percents = 0;
  contribution.forEach(element => {
    percents = Number(percents) + Number(element.sum);
  });
  percents = (Number(percents) /Number( destination)) * 100;



  // const changeCoin = () => {
  //   setCoinIsDollar(!coinIsDollar)
  // }
  const add = (newDonate) => {
    let id = contribution[contribution.length - 1].id + 1;
    newDonate.id = id;
    newDonate.date = new Date()
    let copy = [...contribution, newDonate];
    setContribution(copy);
  }



  return (
    <>
      <h1>ברוכים הבאים לאתר התרומות של עזר מציון</h1>
      <h1>ימים נוראים תשפ"ד, 2023</h1>
      <h3>היעד הסופי הוא:{destination}</h3>
      <NavBar />
<h1>בשביל git</h1>
      <CircularWithValueLabel value={percents} />


      {/* <MyCurrentCoinContext.Provider value={{ d: coinIsDollar, cc: changeCoin, cd: DollarRate }}> */}
      {/* <ChooseCoin />  */}

      <Routes>
        <Route path='all' element={<List arr={contribution} />} />
        <Route path='add' element={<Form add={add} />} />
        <Route path='sort' element={<List arr={contribution} />} />
      </Routes>
      {/* </MyCurrentCoinContext.Provider> */}

    </>
  );
}


export default App;

