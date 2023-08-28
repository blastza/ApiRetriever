import { useEffect, useState } from 'react';
import './App.css';
import ProvinceData from './components/ProvinceData';

const API = "https://api.test-sfx-hub.co.za/api/utility/province";
const USER = btoa('candidate:12345');


const App = () => {

  const [province, setProvince] = useState([]);

  const fetchProvince = async ( url ) => {
    try {
      const res = await fetch( url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${USER}`, 
        },
        method: "GET"
      } );
      const data = await res.json();
      if(data.length > 0){
        setProvince(data);
      }
    } catch(e) {
      console.error(e);
    }
  }

  useEffect(() => {
    fetchProvince(API);
  },[])

  return <>
    <h1 style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        Coding Challenge 2023
    </h1>
    <table>
      <thead>
        <th>display-name</th>
        <th>value</th>

      </thead>
        <tbody>
          <ProvinceData province = {province}/>
        </tbody>
    </table>
  </>

}

export default App;
