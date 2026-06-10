import { useState } from 'react'

const App = () => {

const [courseName, setCourseName] = useState<string>(''); // empty string for course name
//courseName is the current value the vairbale, setCourseName is the function that changs the value, 

const[ selectedDay, setSelectedDay] = useState<string>('weekday'); // empty string for selected day. 

const[ startTime, setStartTime] = useState<string>('');
const[ endTime, setEndTime] = useState<string>('');

const [ scheduleItem , setScheduleItem] = useState<ScheduleItemType | null>(null); // schedule item is either null or an object that has the properties of ScheduleItemType

type ScheduleItemType = { // schedule item must be an object that has the following properties
  courseName: string;
  selectedDay: string;
  startTime: string;
  endTime: string;
};


// type CourseType = {  //CourseType must be an object that has a property callled courseName that is a string
//   courseName: string;
// };





  return<>

  <h1 className = "title">Schedule Builder</h1>
  <div>
    <label className="course-label" htmlFor='courseName'>Course Name: </label>

    <input placeholder='e.g. CS 2110'
    value  = {courseName} //what the desktop shows 

    onChange={(event) =>{ //what runs when the user types in the input box
      const newCourseName = event.target.value; //when the user types grab the new text and store it in courseName
      setCourseName(newCourseName);
    }
    } />

    

    {/* <input placeholder='e.g. weekday'  
    value = {selectedDay}
    onChange= {(event) => {
      const newSelectedDay = event.target.value;
      setSelectedDay(newSelectedDay);
      

    }} /> */}
    
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
    
    <select className =" start-time-dropdown" >
     <option className = "start-time"> 8:00 AM </option>
     <option className = "start-time"> 8:30 AM </option>
     <option className = "start-time"> 9:00 AM </option>
     <option className = "start-time"> 9:30 AM </option>
     <option className = "start-time"> 10:00 AM </option>
     <option className = "start-time"> 10:30 AM </option>
     <option className = "start-time"> 11:00 AM </option>
     <option className = "start-time"> 11:30 AM </option>
     <option className = "start-time"> 12:00 PM </option>
     <option className = "start-time"> 12:30 PM </option>
     <option className = "start-time"> 1:00 PM </option>
     <option className = "start-time"> 1:30 PM </option>
     <option className = "start-time"> 2:00 PM </option>
     <option className = "start-time"> 2:30 PM </option>
     <option className = "start-time"> 3:00 PM </option>
     <option className = "start-time"> 3:30 PM </option>
     <option className = "start-time"> 4:00 PM </option>
     <option className = "start-time"> 4:30 PM </option>
     <option className = "start-time"> 5:00 PM </option>
     <option className = "start-time"> 5:30 PM </option>
      <option className = "start-time"> 6:00 PM </option>
      <option className = "start-time"> 6:30 PM </option>
      <option className = "start-time"> 7:00 PM </option>
      <option className = "start-time"> 7:30 PM </option>
      <option className = "start-time"> 8:00 PM </option>
      <option className = "start-time"> 8:30 PM </option>
    </select>

    <select className =" end-time-dropdown" >
     <option className = "start-time"> 8:00 AM </option>
     <option className = "start-time"> 8:30 AM </option>
     <option className = "start-time"> 9:00 AM </option>
     <option className = "start-time"> 9:30 AM </option>
     <option className = "start-time"> 10:00 AM </option>
     <option className = "start-time"> 10:30 AM </option>
     <option className = "start-time"> 11:00 AM </option>
     <option className = "start-time"> 11:30 AM </option>
     <option className = "start-time"> 12:00 PM </option>
     <option className = "start-time"> 12:30 PM </option>
     <option className = "start-time"> 1:00 PM </option>
     <option className = "start-time"> 1:30 PM </option>
     <option className = "start-time"> 2:00 PM </option>
     <option className = "start-time"> 2:30 PM </option>
     <option className = "start-time"> 3:00 PM </option>
     <option className = "start-time"> 3:30 PM </option>
     <option className = "start-time"> 4:00 PM </option>
     <option className = "start-time"> 4:30 PM </option>
     <option className = "start-time"> 5:00 PM </option>
     <option className = "start-time"> 5:30 PM </option>
      <option className = "start-time"> 6:00 PM </option>
      <option className = "start-time"> 6:30 PM </option>
      <option className = "start-time"> 7:00 PM </option>
      <option className = "start-time"> 7:30 PM </option>
      <option className = "start-time"> 8:00 PM </option>
      <option className = "start-time"> 8:30 PM </option>
    </select>
  
<button  className= 'add-course-btn' type='submit' onClick={() => {
    setScheduleItem(courseName + " " + selectedDay + " " + startTime + " " + endTime); // when the user clicks the button, set the schedule item to be a string that has the course name, selected day, start time, and end time

  }}>
    + Add Course
      </button>

</div>

<h1 className = "your-course-title"> Your Courses </h1>
{scheduleItem}
    
</>
    




}

export default App