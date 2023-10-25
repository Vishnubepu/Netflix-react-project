import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import { action, originals, ComedyMovies,RomanceMovies,ActionMovies,HorrorMovies,Documentaries } from './constants/urls'
import './App.css';
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import Footer from './Components/footer/Footer'
function App() {
  return (
    <div className="App">
        <NavBar/>
        <Banner/>
        <RowPost url={originals} tittle='Origin Movies'/>
        <RowPost url={action} tittle='Action' isSmall/>
        <RowPost url={ComedyMovies} tittle='Comedy Movies' />
        <RowPost url={RomanceMovies} tittle='Romance Movies' isSmall/>
        <RowPost url={ActionMovies} tittle='ActionMovies' />
        <RowPost url={HorrorMovies} tittle='HorrorMovies' isSmall/>
        <RowPost url={Documentaries} tittle='Documentaries' />
        <Footer/>

    </div>
  );
}

export default App;
