
import './App.css';
import {  Route, Routes } from 'react-router-dom';
import List from './List';
import Form from './Form';
import NavBar from './NavBar';
import { useEffect, useState } from "react";
import ChooseCoin from './ChooseCoin';
import axios from "axios";
import CircularWithValueLabel from './CircularProgressWithLabel';
import { createContext } from 'react';

export const MyCurrentCoinContext = createContext();

function App() {

  let destination = 500000;

  let [contribution, setContribution] = useState([
    { id: 1, name: "משה כהן", sum: 5000, delection: " להצלחת הפרויקט", date: new Date(2023, 10, 17) },
    { id: 2, name: " פיני חימוביץ", sum: 13000, delection: "  עם ישראל חי!", date: new Date(2023, 11, 15) },
    { id: 3, name: "אנונימי", sum: 100000, delection: " להצלת עם ישראל ולהחזרת החטופים", date: new Date(2023, 12, 1) }
  ])
  const [DollarRate, setDollarRate] = useState(undefined);
  const [coinIsDollar, setCoinIsDollar] = useState(false);
  useEffect(() => {
    axios.get(" https://v6.exchangerate-api.com/v6/664d05a0b1705ce79cdb52df/latest/USD")
      .then(res => {
        alert(res.data.conversion_rates.ILS);
        setDollarRate(res.data.conversion_rates.ILS)
      })
      .catch(err => {
        console.log(err);
        alert("לא ניתן להציג את האתר בדולרים")
      })
  }, [])

  let percents = 0;
  let completion = destination;
  let result = 0;
  contribution.forEach(element => {
    percents = Number(percents) + Number(element.sum);
  });
  completion = (destination - percents);
  result =percents;
  percents = (Number(percents) / Number(destination)) * 100;


  const changeCoin = () => {
    setCoinIsDollar(!coinIsDollar)
  }

  const add = (newDonate) => {
    let id = contribution[contribution.length - 1].id + 1;
    newDonate.id = id;
    newDonate.date = new Date()
    let copy = [...contribution, newDonate];
    setContribution(copy);
  }

  return (
    <>
      <h1> ברוכים הבאים לאתר התרומות של עזר מציון</h1>
      <h1>ימים נוראים תשפ"ד, 2023</h1>
      <h2>₪ יעד הקמפיין הוא 500,000  </h2>     
      <MyCurrentCoinContext.Provider value={{ d: coinIsDollar, cc: changeCoin, cd: DollarRate }}> 
      <NavBar /> 
      {<ChooseCoin />  }
      <CircularWithValueLabel value={percents} />
      <h2>   ₪ הושג עד כה {result}    </h2>      
      <h2>₪ נשאר להשיג עוד {completion}  </h2>     
      <Routes>
        <Route path='all' element={<List arr={contribution} />} />
        <Route path='add' element={<Form add={add} />} />
        <Route path='sort' element={<List arr={contribution} />} />
      </Routes>
      </MyCurrentCoinContext.Provider>

    </>
  );
}


export default App;

