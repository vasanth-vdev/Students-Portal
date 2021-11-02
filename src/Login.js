import React from "react";
import './Login.css';
import Dash from './Dash';
import logo from './images/LogoW.png';

function Login() {
    return (
        <div id="Body">
            <div id="Blue">
                <img id="logo" src={logo} alt="" />
                <h1>PSG POLYTECHNIC COLLEGE <br /> PEELAMEDU COIMBATORE - 641004</h1>
                <div id="White">
                    <h2>Login to Your Account</h2>
                    <button id='Students' onMouseEnter={
                        () => {
                            document.getElementById('iconS').style.fill = '#797979';
                            document.getElementById('iconS').style.transition = '0.5s';
                        }} onMouseLeave={
                            () => {
                                document.getElementById('iconS').style.fill = '#FFFFFF';
                                document.getElementById('iconS').style.transition = '0.5s';
                            }
                        }>
                        <svg id="iconS" xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" /></svg>
                        STUDENT'S LOGIN
                    </button>
                    <button id='Teachers' onMouseEnter={
                        () => {
                            document.getElementById('iconT').style.fill = '#FFFFFF';
                            document.getElementById('iconT').style.transition = '0.5s';
                        }} onMouseLeave={
                            () => {
                                document.getElementById('iconT').style.fill = '#797979';
                                document.getElementById('iconT').style.transition = '0.5s';
                            }
                        }>
                        <svg id='iconT' xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                        TEACHERS LOGIN
                    </button>
                    <h4>Roll No</h4>
                    <input type="text" id="Roll" name="Roll" />
                    <h4 id="nameP">Password</h4>
                    <input type="Password" id="Pass" name="Pass" />
                    <button id="Login" onClick={() => {
                        return Dash();
                    }}>LOGIN</button>
                </div>
            </div>
        </div >
    );
}

export default Login;