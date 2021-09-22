import DaySquare from './daySquare.jsx'
import './calendarGrid.scss'
import { useState, useEffect, useRef } from 'react';
import NavBar from './theNavBar.jsx'

export default function CalendarGrid(props) {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [currentMonth, setCurrentMonth] = useState([]);
    const weekString = ['M', 'TU', 'W', 'T', 'F', 'S', 'SU'];
    const daysInMonth = getDaysInMonth(selectedDate.getMonth(), selectedDate.getFullYear());
    let startDay = getStartDay(selectedDate.getMonth(), selectedDate.getFullYear());
    
    function getStartDay(month, year){
        let day = new Date(year, month, 1).getDay();
        if(day === 0){
            day = 7
        }
        day --

        return day
    }

    function getDaysInMonth(month, year){
        return new Date(year,month,0).getDate()
    }

    function checkToday(currentMonth){
        let today = new Date();
        const todayInCalendar = today.getDate()
        const todaySelected = document.querySelector(`#day${todayInCalendar}`);
        if(!todaySelected){
            return;
        }
        if(todaySelected){
            todaySelected.style.backgroundColor = 'whitesmoke';
            todaySelected.style.color = 'bisque';
        }
        if((selectedDate.getFullYear() === today.getFullYear()) && (selectedDate.getMonth() === today.getMonth())){
            console.log(currentMonth)
            const todayInCalendar = today.getDate()
            const todaySelected = document.querySelector(`#day${todayInCalendar}`);
            todaySelected.style.backgroundColor = 'green';
            todaySelected.style.color = 'bisque';
            
        }

    }
    function switchMonth(direction){
        let newYear = selectedDate.getFullYear();
        let newMonth = selectedDate.getMonth() + direction;
        if(newMonth > 11){
            newMonth = 0;
            newYear ++;
        }else if(newMonth <0){
            newMonth = 11;
            newYear --;
        }
        const newDate = new Date(newYear, newMonth)
        setSelectedDate(newDate)
    }
    useEffect(() => {
        const month = [];
        let na_value = 100
        for (let i = 1; i <= daysInMonth; i++) {
            if (startDay !== 0) {
                month.push(na_value);
                startDay--;
                na_value ++;
                i = 0;
            } else {
                month.push(i);
            }
        }
        setCurrentMonth(month);
    }, [selectedDate]);

    const isFirstRun = useRef(true);

    useEffect(()=>{
        if(isFirstRun.current){
            isFirstRun.current = false;
            return;
        }
        checkToday(currentMonth)
    },[currentMonth])


    return (
        <>
            <NavBar date={selectedDate} switchMonth={switchMonth}></NavBar>
            <div className='gridsquare'>
                {
                    weekString.map((day) => {
                        return (
                            <DaySquare className='weekdays' key={day}>{day}</DaySquare>
                        )
                    })
                }
                {
                    currentMonth.map((day) => {
                        return (
                            <DaySquare id={"day" + day} className={day >= 100 ? "noValue":"square"} key={day}>{day}</DaySquare>
                        )
                    })
                }

            </div>
        </>


    )
};