import React from 'react';
import './App.css'
import { useState, useEffect } from "react";
import axios from "axios";
import Home from "../Home/Home";
import SleepPage from "../SleepPage/SleepPage";
import NutritionPage from "../NutritionPage/NutritionPage"
import ExercisePage from "../ExercisePage/ExercisePage"
import ActivityPage from '../ActivityPage/ActivityPage';
import LogIn from  '../LogIn/LogIn'
import LogInUser from '../Api/LogInUser/LogInUser';
import SignUp from '../SignUp/SignUp'
import SignUpUser from '../Api/SignUpUser/SignUpUser'
import Navbar from '../Navbar/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserNutritions from '../Api/UserNutritions/UserNutritions';
import UserExcercises from '../Api/UserExcercises/UserExcercises';
import UserSleep from '../Api/UserSleep/UserSleep';
import SleepPageCreate from '../SleepPageCreate/SleepPageCreate';
import NutritionPageCreate from '../NutritionPageCreate/NutritionPageCreate';
import ExercisePageCreate from '../ExercisePageCreate/ExercisePageCreate';


function App() {
  const {NutritionLogs, setNutritionLogs, PostUserNutritionLogs, GetUserNutritionLogs}  = UserNutritions()
  const {ExerciseLogs, setExcerciseLogs, PostUserExcercises,  GetUserExcercises}  = UserExcercises()
  const {SleepLogs, setSleepLogs, GetSleepingData, PostSleepingData} = UserSleep()
  const [Login, setLogin] = useState(false)
  const [UserID, setUserID] = useState()
  
  if (Login) {
    GetSleepingData()

  }

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar setSleepLogs = {setSleepLogs} setExcerciseLogs = { setExcerciseLogs } setNutritionLogs = { setNutritionLogs } />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activity" element=  {<ActivityPage  />} />
          <Route path="/nutrition" element={<NutritionPage NutritionLogs = {NutritionLogs} setNutritionLogs = {setNutritionLogs}  />} />
          <Route path='/exercise' element ={<ExercisePage ExerciseLogs = {ExerciseLogs} setExcerciseLogs = {setExcerciseLogs} />} />
          <Route path='/sleep' element = {<SleepPage SleepLogs=  {SleepLogs} setSleepLogs = { setSleepLogs} PostSleepingData =  { PostSleepingData } UserID  = { UserID }/>} />
          <Route path = '/login' element= {<LogIn Login={Login} setLogin = { setLogin } UserID = { UserID } setUserID = { setUserID } />}  />
          <Route path = '/signUp' element = {< SignUp   />} />
          <Route path = '/sleep/create' element = {< SleepPageCreate />} />
          <Route path = '/nutrition/create' element = {< NutritionPageCreate />} />
          <Route path = '/exercise/create' element = {< ExercisePageCreate />} /> 
        </Routes>
      
      </BrowserRouter>

    </div>
  )
}

export default App;
