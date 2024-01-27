
// import TextField from '@mui/material/TextField';
import React, { useEffect, useState } from 'react'
import './css.css';



export default function App() {


  const [apidata, setApidata] = useState([]);
  const [country, setCountry] = useState("");

  useEffect(() => {
    let apiPath;
    if (country === "") {
      apiPath = `https://restcountries.com/v3.1/all`;
      
    }
    else { apiPath = `https://restcountries.com/v3.1/name/${country}`; }

    // console.log(apiPath)
    fetch(apiPath)
      .then(response => response.json())
      .then(value => {
        setApidata(value)
      })

  }, [country])
  return (
    <div style={{color:'white', background:'black',textAlign:'center'}}>
    <label  style={{ margin:'2rem', fontSize:'2rem' }}>
      Search Country:
      <input
        type="text"
        onChange={(ev) => setCountry(ev.target.value)}
        style={{ width:'15rem', height:'2rem', margin:'1rem'}}
      />
    </label>
    <hr />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent:'center' }}>
        {apidata &&
          apidata.length > 0 &&
          apidata.map((obj, index) => (
            <div key={index} style={{ margin: '10px', width: '200px' }}>
              <img src={obj.flags.png} alt="Country Flag" style={{ height: '120px', width: '200px' }} />
              
              <div style={{textAlign:'start'}}>
                <h2 style={{textAlign:'center'}}>{obj.name.common}</h2>
                <p>Official: {obj.name.official}</p>
                <p>Capital: {obj.capital}</p>
                <p>Region: {obj.region}</p>
                <p>Sub Region: {obj.subregion}</p>
              </div>
            </div>
          ))}

  </div>
  </div>
      );
}
