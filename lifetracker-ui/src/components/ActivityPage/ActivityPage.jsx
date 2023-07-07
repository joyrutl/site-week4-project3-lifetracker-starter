import React from 'react'
import "./ActivityPage.css"
import {Link} from 'react-router-dom'

const ActivityPage = ({ExerciseLogs, NutritionLogs, SleepLogs}) => {

  let totalExerciseMinutes = 0
  let averageDailyCalories = 0
  let avgHoursSleep=0

  NutritionLogs.map((calories) => {
    averageDailyCalories += calories.calories
  })

  averageDailyCalories /= NutritionLogs.length

 
  ExerciseLogs.map((exercise) => {
    totalExerciseMinutes += exercise.duration
  })

  const formatTime = (startTime, endTime) => {
    const options = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false };
    console.log('starttime', startTime); 
    console.log('endtime', endTime); 
    let start = new Date(startTime);
    let end = new Date(endTime);
    let startHour= start.getHours(); 
    let endHour = end.getHours(); 
    let diff = endHour - startHour;
    // let diffTime = new Date(diff);
    console.log('start', startHour); 
    console.log('end', endHour); 
    console.log('diftime', diff); 
    return diff; 
    // return diff.toLocaleTimeString(undefined, options);
    };

    console.log

  SleepLogs.map((sleep) =>{
    // let hours = sleep.endTime - sleep.startTime
    // avgHoursSleep +=  hours
    avgHoursSleep = formatTime(sleep.start_time, sleep.end_time)

  })


  console.log("Total Ex", totalExerciseMinutes)
  console.log("Total Cal", averageDailyCalories)
  console.log("Total Sleep", avgHoursSleep)

  return (
    <div className='activity-main'>
      <div className='activity-split'>
        <div className='h3'>
          <h3>Activity Log</h3>
        </div>
        <div className='ex-sleep-nutri'>
          <Link to={"/exercise/create"}><button className='ex-btn'>Add Exercise</button></Link>
          <Link to={"/nutrition/create"}><button className='nutri-btn'>Record Nutrition</button></Link>
          <Link to={"/sleep/create"}><button className='sleep-btn'>Log Sleep</button></Link>
        </div>
      </div>
      
      <div className="total-data">
     
      <div className='ex-minutes data-card'>
        <p>Total Exercise Minutes</p>
        <p className='data-num'>{totalExerciseMinutes}</p>
      </div>

      <div className='daily-cal data-card'>
        <p> Average Daily Calories</p>
        <p className='data-num'>{parseFloat(averageDailyCalories).toFixed(0)}</p>
      </div>

      <div className='hrs-sleep data-card'>
        <p> Average Hours of Sleep</p>
        <p className='data-num' >{avgHoursSleep}</p>
      </div>

      </div>

    


    </div>
  )
}

export default ActivityPage

//          <Link to={"/nutrition/create"}><button className='nutri-btn'>Record Nutrition</button></Link>

//          <Link to={"/sleep/create"}><button className='sleep-btn'>Log Sleep</button></Link>
