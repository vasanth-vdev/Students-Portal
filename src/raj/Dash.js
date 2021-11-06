import React, { useState } from "react";
//import Camarks from "./Camarks";
// import './Dash.css';
import Logo from './images/Logo.png';
import arrowDown from './images/arrowDown.svg'
import arrowUp from './images/arrowUp.svg'
import Today from "./Today";
//import Leave from './Leave';
//import Feestruct from "./Feestruct";
//import ExamTimetable from './ExamTimetable';


function Dash() {
    const [dropArrow, setdropArrow] = useState(false)
    const dropArrowHandler = () => {
        setdropArrow(!dropArrow)
    }
    return (
        <div id="Body">
            <div id="Whole">
                <div id="Sidebar">
                    <img id="Glass" src="https://s3-alpha-sig.figma.com/img/c539/3350/8bf6e21ca5600efa72860bff6ae0d5b0?Expires=1635724800&amp;Signature=XPfQ6Smjd2tG41XpNyz3jl2ZO3Dmg8aWlOvYGFInizf8EwetxRWgBryL7aCXuyZwO2E46THB~SfSB~trsWH9yMX01ZyQTwJORrYat~IXxuvQ2uuUILVFz5c53IHHsvaCiJQdUo55m4Tq4y9in562gityk3HYcluQy4rJEDabj~pUNOWLUPCWnSh8hLvXCk1qFDd0zAeOfXdTwbRVnBHOw~xuvzovOqgkggrJUHSFqaz5zIbqm~hGENy5uZfr1mmNoW9dMnDSIUdbyiPPB38cx5ZBQTCRlNU4eRiEDjom7NkPLnVzE1em3VAypvkFBeX8~mPPMX2EI~8qm55DAVEYig__&amp;Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" />
                    <img id="Logo" src={Logo} alt="" />
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9 17v2H5v-2h4M21 3h-8v6h8V3zM11 3H3v10h8V3zm10 8h-8v10h8V11zm-10 4H3v6h8v-6z" /></svg>
                        <h1>Dashboard</h1>
                    </button>
                    <button id="Academy" onClick={dropArrowHandler}>
                        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 20 20" height="48px" viewBox="0 0 20 20" width="48px" fill="#000000"><g><rect fill="none" height="20" width="20" /></g><g><g><g><rect height="3" width="3" x="8.5" y="4" /></g><g><rect height="3" width="3" x="4" y="13" /></g><g><rect height="3" width="3" x="4" y="8.5" /></g><g><rect height="3" width="3" x="4" y="4" /></g><g><rect height="3" width="3" x="13" y="4" /></g><g><polygon points="9,14.49 9,16 10.51,16 15.4,11.1 13.9,9.6" /></g><g><polygon points="11.5,9.88 11.5,8.5 8.5,8.5 8.5,11.5 9.87,11.5" /></g><g><path d="M16.85,8.94l-0.79-0.79c-0.2-0.2-0.51-0.2-0.71,0L14.6,8.9l1.5,1.5l0.75-0.75C17.05,9.45,17.05,9.13,16.85,8.94z" /></g></g></g></svg>
                        <h1>Academics</h1>
                        <img src={dropArrow ? arrowDown : arrowUp} alt='arrow1' id="svg1" />
                    </button>
                    <button id="Exam" onClick={dropArrowHandler}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" /></svg>
                        <h1>Examination</h1>
                        <img src={dropArrow ? arrowDown : arrowUp} alt='arrow2' id="svg2" />
                    </button>
                    <button id="Hostel" onClick={dropArrowHandler}>
                        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="48px" viewBox="0 0 24 24" width="48px" fill="#000000"><rect fill="none" height="24" width="24" /><g><path d="M9.5,18H8V9h1.5V18z M12.75,18h-1.5V9h1.5V18z M16,18h-1.5V9H16V18z M17,6h-2V3c0-0.55-0.45-1-1-1h-4C9.45,2,9,2.45,9,3v3 H7C5.9,6,5,6.9,5,8v11c0,1.1,0.9,2,2,2c0,0.55,0.45,1,1,1s1-0.45,1-1h6c0,0.55,0.45,1,1,1s1-0.45,1-1c1.1,0,2-0.9,2-2V8 C19,6.9,18.1,6,17,6z M10.5,3.5h3V6h-3V3.5z M17,19H7V8h10V19z" /></g></svg>
                        <h1>Hostel</h1>
                        <img src={dropArrow ? arrowDown : arrowUp} alt='arrow3' id="svg3" />
                    </button>
                </div>
                <div id="Main">
                    <Today />
                </div>
            </div>
        </div>
    );
}
export default Dash;