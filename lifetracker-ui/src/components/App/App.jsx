import './App.css'
import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import Home from "../Home/Home";
import SleepPage from "../SleepPage/SleepPage";
import NutritionPage from "../NutritionPage/NutritionPage"
import ExercisePage from "../ExercisePage/ExercisePage"
import ActivityPage from '../ActivityPage/ActivityPage';
import SignUp from '../SignUp/SignUp';
import LogIn from '../LogIn/LogIn';
import { BrowserRouter, Route, Routes } from "react-router-dom";




function App() {
  const [Login, setLogin] = useState()
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activity" element={<ActivityPage />} />
          <Route path="/nutrition" element={<NutritionPage />} />
          <Route path='/exercise' element ={<ExercisePage />} />
          <Route path='/sleep' element = {<SleepPage />} />
          <Route path = '/login' element= {<LogIn Login={Login}/>}  />
          <Route path = '/signUp' element = {< SignUp  />} />
        </Routes>
      
      </BrowserRouter>

    </div>
  )
}

export default App
