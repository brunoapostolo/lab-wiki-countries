import React, { useEffect, useState } from 'react';
import { ReactDOM } from 'react';
import reportWebVitals from "./reportWebVitals"
import axios from "axios"
import {Routes, Route} from "react-router-dom"
import './App.css';
import Navbar from "./components/NavBar"
import CountryDetails from './components/CountryDetails';
import CountriesList from './components/CountriesList';




function App() {
  const [countries, setCountries]= useState([])
  
  useEffect(()=>{
    async function fetchCountries(){
      const response = await axios.get(
        "https://ih-countries-api.herokuapp.com/countries"
      )
      setCountries(response.data)
    }
    fetchCountries();
  },[])

  return (
    <div className="App">
      <Navbar/>
      <div className='container'>
        <div className='row'>
          <CountriesList countries={countries}/>
          <Routes>
            <Route path="/:countryAlpha3Code" element={<CountryDetails countries={countries}/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default App;