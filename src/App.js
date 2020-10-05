import React from 'react';
import { useState } from 'react';
import './App.less';
import { useStyles } from 'react-styles-hook';
import { Input } from 'antd';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';

const styles = useStyles({
  app: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {  
    padding: '50px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
})

function App() {

  const [name, setName] = useState('Canada');
  const [nativeName, setNativeName] = useState('Canada');
  const [flag, setFlag] = useState("https://restcountries.eu/data/can.svg");
  const [capital, setCapital] = useState('Ottawa');
  const [population, setPopulation] = useState(36155487);
  const [region, setRegion] = useState('Americas'); 
  const [currencies, setCurrencies] = useState('$ Canadian dollar'); 
  
  const handleInput = (e) => {
    const url = `https://restcountries.eu/rest/v2/name/${e.target.value}`;
    fetch(url)
    .then(
      (response) => {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' + response.status);
          return;
        }
        // Examine the text in the response
        response.json().then(data => {
          setName(data[0].name);
          setFlag(data[0].flag);
          setCapital(data[0].capital);
          setNativeName(data[0].nativeName);
          setPopulation(data[0].population);
          setRegion(data[0].region);
          setCurrencies(data[0].currencies[0].symbol + " " + data[0].currencies[0].name);
        });
      }
    )
    .catch(err => {
      console.log('Fetch Error :-S', err);
    });
  }

  return (
    <div className="App" style={styles.app}>
      <div style={styles.container} className='section'>
        
        <div style={{textAlign: "center"}}>
          <h1>Search Country</h1>
          <Input onChange={handleInput} />
        </div>

        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>

          <div>
            <div className='section' style={{textAlign: 'center'}}>
              <h1>{nativeName}</h1>
              <img src={flag} width='200px' />
            </div>
            <div className='section'>
              <h2>Country Name: {name}</h2>
              <h2>Region: {region}</h2>
              <h2>Capital City: {capital}</h2>
              <h2>Population: {population}</h2>
              <h2>Currencies: {currencies}</h2>
            </div>
          </div>

          <div>
            <div className='section' style={{textAlign: 'center'}}>
              <h1>Canada</h1>
              <img src='https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg' width='200px' />
            </div>
            <div className='section' style={{textAlign: 'center'}}>
              <h1>Canada</h1>
              <img src='https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg' width='200px' />
            </div>
          </div>

      </div>

      </div>
    </div>
  );
}

export default App;
