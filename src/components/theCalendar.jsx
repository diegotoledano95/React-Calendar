import './theCalendar.scss';
import CalendarGrid from './calendarGrid.jsx'

export default function title(props){
    
    return(
        
        <div className='theCalendar' >
            <h1>Calendar</h1>
            <CalendarGrid></CalendarGrid>
        </div>

    )
};
