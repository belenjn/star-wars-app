import './App.css';
import { Footer } from './components/footer/Footer';
import { Navbar } from './components/navbar/Navbar';
import { DashboardRoutes } from './routes/DashboardRoutes';
import React from "react";



function App() {
  return (
    <div className="App">
      <Navbar/>
      <a className = "enlace__imagen" href='/'>
         <img className='star_wars--items' 
          src='../images\starwars--title.png'
          alt='star wars title' />
      </a>
     
      <img className='star_wars--items' src='../images/sable_laser.png' alt='sable' />
      <DashboardRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
