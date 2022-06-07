import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainScreen from "./MainScreen";
import TopNavbar from './components/TopNavbar.js';
import SelectDish from './SelectDish';
import SelectDrinks from './SelectDrinks';
import SelectDateAndPeople from './SelectDateAndPeople';
import Receipt from './Receipt';


function App() {
  return (
    <Router>
      <div className="container">
        <TopNavbar />
      </div>
      <Routes>
        <Route exact path="/" element={<MainScreen />} />
        <Route exact path="/SelectDish" element={<SelectDish />} />
        <Route exact path="/SelectDrinks" element={<SelectDrinks />} />
        <Route exact path="/SelectDateAndPeople" element={<SelectDateAndPeople />} />
        <Route exact path="/Receipt" element={<Receipt />} />
      </Routes>
    </Router>
  );
}

export default App;