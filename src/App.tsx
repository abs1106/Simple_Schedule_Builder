import { useState } from 'react'
import ScheduleItem from './component/ScheduleItem';
type ScheduleItemType = { // schedule item must be an object that has the following properties
  courseName: string;
  selectedDay: string;
  startTime: string;
  endTime: string;
};

const times = [
  "8:00 AM",
  "8:30 AM",
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
  "5:30 PM",
   "6:00 PM",
   "6:30 PM",
   "7:00 PM",
   "7:30 PM",
   "8:00 PM",
   "8:30 PM"
]


const App = () => {

const [courseName, setCourseName] = useState<string>(''); // empty string for course name
//courseName is the current value the vairbale, setCourseName is the function that changs the value, 

const[ selectedDay, setSelectedDay] = useState<string>(''); // empty string for selected day. 

const[ startTime, setStartTime] = useState<string>('');
const[ endTime, setEndTime] = useState<string>('');

const [ scheduleItem , setScheduleItem] = useState<ScheduleItemType[]>([]); // schedule item is either null or an object that has the properties of ScheduleItemType

  return<>

  <h1 className = "header-title">Schedule Builder</h1>
  <p className = "header-subtitle">Add your courses to build your schedule!</p>

 {scheduleItem.map(
  ({courseName,selectedDay,startTime,endTime}, index) =>
    <ScheduleItem
      key = {index}
      courseName = {courseName}
      selectedDay = {selectedDay}
      startTime = {startTime}
      endTime = {endTime}/>
 )

 
 }

  <form onSubmit={(event) => {
            event.preventDefault();}}>
  <div>
    <label className="label-course" htmlFor='courseName'>Course Name: </label>

    <input placeholder='e.g. CS 2110'
    value  = {courseName} //what the desktop shows 

    onChange={(event) =>{ //what runs when the user types in the input box
      const newCourseName = event.target.value; //when the user types grab the new text and store it in courseName
      setCourseName(newCourseName);
    }
    } />

    <label className = "label-day"> Day: </label>

    
<select className =" day-dropdown" value={selectedDay} onChange={(event) => {
  const newSelectedDay = event.target.value;
  setSelectedDay(newSelectedDay);
}}>
    <option className = "weeday"> Monday </option>
    <option className = "weeday"> Tuesday </option>
    <option className = "weeday"> Wednesday </option>
    <option className = "weeday"> Thursday </option>
    <option className = "weeday"> Friday </option>
    <option className = "weeday"> Saturday </option>
    <option className = "weeday"> Sunday </option>
</select>


    <label className = "label-start-time"> Start Time: </label>
    <select className =" start-time-dropdown"  value={startTime} onChange={(event) => {
      const newStartTime = event.target.value;
      setStartTime(newStartTime);
    }}>
      {times.map((time) => <option key={time} className = "start-time">{time}</option>) };  {/*for each time in the times array, create an option element with the time as the text*/

}</select>

<label className = "label-end-time"> End Time: </label>

    <select className =" end-time-dropdown"  value={endTime} onChange={(event) => {
      const newEndTime = event.target.value;
      setEndTime(newEndTime);
    }}  >
     {times.map((time) => <option key={time} className = "start-time">{time}</option>) };
    </select>
  
<button  className= 'add-course-btn' type='submit' onClick={() => {
    setScheduleItem({ courseName, selectedDay, startTime, endTime }); // when the user clicks the button, set the schedule item to be an object that has the course name, selected day, start time, and end time
  
  }}>
    + Add Course
      </button>
      </div>
      </form>
      

<div className = "schedule-display">

<h2 className = "schedule-display-title"> Your Courses </h2>


  </div>
</>

}

export default App