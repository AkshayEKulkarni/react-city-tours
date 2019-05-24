import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/navbar';
import TourList from "./components/TourList/tourlist";

function App() {
  return (
    <div>
      <Navbar />
      <TourList />
    </div>
  );
}

export default App;
