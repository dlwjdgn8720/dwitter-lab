import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import { Outlet } from 'react-router-dom';

export default function App() {
  // const [data, setData] = useState({});  

  // useEffect(()=>{
  //   const loadData = async() => {
  //     const response = await fetch("http://localhost:5173/data/portfolio.json");
  //     const json = await response.json();
  //     setData(json);
  //   }
  //   loadData();
  // }, []);
  
  return (
    <>
      <Header />
      <Outlet/> 
      <Footer/>
    </>
  )
}


