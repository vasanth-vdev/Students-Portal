import React from 'react'
import './Feestruct.css'

function Feestruct() {
    return (
        <div>
            <h2>Semester Fee Structure</h2>
            <table>
                <tr>
                    <th id="cont-left">Head</th>
                    <th id="cont-right">Amount</th>
                </tr>
                <tr>
                    <td id="cont-left">Tution Fee</td>
                    <td id="cont-right">10000</td>
                </tr>
                <tr>
                    <td id="cont-left">Special Fee</td>
                    <td id="cont-right">8000</td>
                </tr>
                <tr>
                    <td id="cont-left">Development Fee</td>
                    <td id="cont-right">8000</td>
                </tr>
                <tr>
                    <td id="cont-left">Examination Fee</td>
                    <td id="cont-right">850</td>
                </tr>
                <tr>
                    <td id="cont-left">Fine Arts and Cultural Assn</td>
                    <td id="cont-right">475</td>
                </tr>
                <tr>
                    <td id="cont-left">General Personal Accident Policy</td>
                    <td id="cont-right">250</td>
                </tr>
                <tr>
                    <td id="cont-left">Library Fee</td>
                    <td id="cont-right">1000</td>
                </tr>
                <tr>
                    <td id="cont-left">Youth Red Cross</td>
                    <td id="cont-right">20</td>
                </tr>
                <tr>
                    <td id="cont-left">Diploma Computer Assn</td>
                    <td id="cont-right">250</td>
                </tr>
                <tr>
                    <td id="cont-left">Flag Day</td>
                    <td id="cont-right">5</td>
                </tr>
                <tr>
                    <td id="cont-left">Computer and Internet Fee</td>
                    <td id="cont-right">1000</td>
                </tr>
            </table>
            <tr>
                <td id="cont-left-edit">Total</td>
                <td id="cont-right-edit">29850</td>
            </tr>
            <button id="Pay-btn">PAY NOW</button>
        </div>
    )
}

export default Feestruct
