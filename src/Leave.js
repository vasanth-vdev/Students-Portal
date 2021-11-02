import React from 'react'
import './Leave.css'

function Leave() {
    return (
        <div>
            <h2>Posted Leave Printout</h2>
            <div id="L_Form">
                <h3 id="H_name">Name</h3>
                <input type="Text" id="name" />
                <h3 id="H_from">From</h3>
                <input type="date" id="from" />
                <h3 id="H_roll">Roll No</h3>
                <input type="text" id="roll" />
                <h3 id="H_id">To</h3>
                <input type="date" id="to" />
                <h3 id="H_reason">Reason</h3>
                <input type="text" id="Reason" />
                <h3 id="H_document">Document</h3>
                <input type="file" id="doc" />
                <button id="Print_btn">PRINT</button>
            </div>
        </div>
    )
}

export default Leave
