import Button from './button.jsx'
import './theNavBar.scss'


const NavBar = (props) => {
    const {date, switchMonth}=props
    const dateFormatted = `${date.getMonth() + 1}-${date.getFullYear()}`;
    return(
        <>
        <div className="NavBar">
            <div className='button'>
                <Button onClick={() => {switchMonth(-1)}}>Prev</Button>
                <Button onClick={() => {switchMonth(1)}}>Next</Button>
            </div>
            <div className='date'>
                <h1>{dateFormatted}</h1>
            </div>
        </div>
        </>
    )
};

export default NavBar