const ScheduleItem = ({courseName, selectedDay, startTime, endTime}) =>{
    return <>
<h3 className = "scheduleItem_course_title">
    {courseName}
</h3>
<br/>
<p className= " scheduleItem_day">
{selectedDay}
</p>

<p className= " scheduleItem_time">
{startTime} - {endTime}
</p>


    </>
}

export default ScheduleItem;