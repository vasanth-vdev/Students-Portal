import React from 'react';
import './ExamTimetable.css';

function ExamTimetable() {
    const code = 'Z18455';
    const title = 'Miniproject and Entreprenurship';
    return (
        <div>
            <h2>Exam Timetable</h2>
            <table>
                <tr id="Table-Head">
                    <th>DATE</th>
                    <th>SESSION</th>
                    <th>COURSE CODE AND COURSE TITLE</th>
                </tr>
                <tr>
                    <td>24-01-2021</td>
                    <td>A.N</td>
                    <td>{code} {title}</td>
                </tr>
                <tr>
                    <td>24-01-2021</td>
                    <td>A.N</td>
                    <td>{code} {title}</td>
                </tr>
                <tr>
                    <td>24-01-2021</td>
                    <td>A.N</td>
                    <td>{code} {title}</td>
                </tr>
                <tr>
                    <td>24-01-2021</td>
                    <td>A.N</td>
                    <td>{code} {title}</td>
                </tr>
                <tr>
                    <td>24-01-2021</td>
                    <td>A.N</td>
                    <td>{code} {title}</td>
                </tr>
            </table>
        </div>
    )
}

export default ExamTimetable
