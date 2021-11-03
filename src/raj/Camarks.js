import React from 'react';
import './Camarks.css';

function Camarks() {
    const Marks = {
        Mark1: 5,
        Mark2: 5,
        Mark3: 5,
        Mark4: 5,
        Mark5: 5,
        Mark6: 25
    }
    const Intr = {
        Mark1: 5,
        Mark2: 5,
        Mark3: 5,
        Mark4: 5,
        Mark5: 5,
        Mark6: 30,
    }
    const Other = {
        Mark1: 10,
        Mark2: 15,
        Mark3: 25,
    }
    return (
        <div>
            <h2>CA Marks</h2>
            <div id="Lab">
                <h3>Laboratory Marks</h3>
                <table>
                    <tr id="Lab-head">
                        <th> </th>
                        <th>(Z18545)<br /><small>Ethical Hacking and Penetration Testing Laboratory</small></th>
                        <th>(Z18545)<br /><small>Ethical Hacking and Penetration Testing Laboratory</small></th>
                        <th>(Z18545)<br /><small>Ethical Hacking and Penetration Testing Laboratory</small></th>
                        <th>(Z18545)<br /><small>Ethical Hacking and Penetration Testing Laboratory</small></th>
                        <th>(Z18545)<br /><small>Ethical Hacking and Penetration Testing Laboratory</small></th>
                    </tr>
                    <tr>
                        <td>Observation 1<br /> (Max 5)</td>
                        <td>{Marks.Mark1}</td>
                        <td>{Marks.Mark1}</td>
                        <td>{Marks.Mark1}</td>
                        <td>{Marks.Mark1}</td>
                        <td>{Marks.Mark1}</td>
                    </tr>
                    <tr>
                        <td>Observation 2 <br /> (Max 5)</td>
                        <td>{Marks.Mark2}</td>
                        <td>{Marks.Mark2}</td>
                        <td>{Marks.Mark2}</td>
                        <td>{Marks.Mark2}</td>
                        <td>{Marks.Mark2}</td>
                    </tr>
                    <tr>
                        <td>Record 1 <br />(Max 5)</td>
                        <td>{Marks.Mark3}</td>
                        <td>{Marks.Mark3}</td>
                        <td>{Marks.Mark3}</td>
                        <td>{Marks.Mark3}</td>
                        <td>{Marks.Mark3}</td>
                    </tr>
                    <tr>
                        <td>Record 2 <br />(Max 5)</td>
                        <td>{Marks.Mark4}</td>
                        <td>{Marks.Mark4}</td>
                        <td>{Marks.Mark4}</td>
                        <td>{Marks.Mark4}</td>
                        <td>{Marks.Mark4}</td>
                    </tr>
                    <tr>
                        <td>MiniProject<br /> (Max 5)</td>
                        <td>{Marks.Mark5}</td>
                        <td>{Marks.Mark5}</td>
                        <td>{Marks.Mark5}</td>
                        <td>{Marks.Mark5}</td>
                        <td>{Marks.Mark5}</td>
                    </tr>
                    <tr>
                        <td>Total <br />(Max 25)</td>
                        <td>{Marks.Mark6}</td>
                        <td>{Marks.Mark6}</td>
                        <td>{Marks.Mark6}</td>
                        <td>{Marks.Mark6}</td>
                        <td>{Marks.Mark6}</td>
                    </tr>
                </table>
            </div>
            <div id="Intr_Marks">
                <h3 id="Intr">CA Marks</h3>
                <table>
                    <tr id="Intr-head">
                        <th> </th>
                        <th>(Z18545)<br /><small>Ethical Hacking and Penetration Testing Laboratory</small></th>
                        <th>(Z18545)<br /><small>Ethical Hacking and Penetration Testing Laboratory</small></th>
                        <th>(Z18545)<br /><small>Ethical Hacking and Penetration Testing Laboratory</small></th>
                        <th>(Z18545)<br /><small>Ethical Hacking and Penetration Testing Laboratory</small></th>
                        <th>(Z18545)<br /><small>Ethical Hacking and Penetration Testing Laboratory</small></th>
                        <th>(Z18545)<br /><small>Ethical Hacking and Penetration Testing Laboratory</small></th>
                    </tr>
                    <tr>
                        <td>Test 1<br /> (Max 15)</td>
                        <td>{Intr.Mark1}</td>
                        <td>{Intr.Mark1}</td>
                        <td>{Intr.Mark1}</td>
                        <td>{Intr.Mark1}</td>
                        <td>{Intr.Mark1}</td>
                        <td>{Intr.Mark1}</td>
                    </tr>
                    <tr>
                        <td>Test 2 <br /> (Max 15)</td>
                        <td>{Intr.Mark2}</td>
                        <td>{Intr.Mark2}</td>
                        <td>{Intr.Mark2}</td>
                        <td>{Intr.Mark2}</td>
                        <td>{Intr.Mark2}</td>
                        <td>{Intr.Mark2}</td>
                    </tr>
                    <tr>
                        <td>Test 3 <br />(Max 15)</td>
                        <td>{Intr.Mark3}</td>
                        <td>{Intr.Mark3}</td>
                        <td>{Intr.Mark3}</td>
                        <td>{Intr.Mark3}</td>
                        <td>{Intr.Mark3}</td>
                        <td>{Intr.Mark3}</td>
                    </tr>
                    <tr>
                        <td>Best of 2 <br />(Max 15)</td>
                        <td>{Intr.Mark4}</td>
                        <td>{Intr.Mark4}</td>
                        <td>{Intr.Mark4}</td>
                        <td>{Intr.Mark4}</td>
                        <td>{Intr.Mark4}</td>
                        <td>{Intr.Mark4}</td>
                    </tr>
                    <tr>
                        <td>Assesment/Miniproject<br /> (Max 10)</td>
                        <td>{Intr.Mark5}</td>
                        <td>{Intr.Mark5}</td>
                        <td>{Intr.Mark5}</td>
                        <td>{Intr.Mark5}</td>
                        <td>{Intr.Mark5}</td>
                        <td>{Intr.Mark5}</td>
                    </tr>
                    <tr>
                        <td>Total <br />(Max 30)</td>
                        <td>{Intr.Mark6}</td>
                        <td>{Intr.Mark6}</td>
                        <td>{Intr.Mark6}</td>
                        <td>{Intr.Mark6}</td>
                        <td>{Intr.Mark6}</td>
                        <td>{Intr.Mark6}</td>
                    </tr>
                </table>
            </div>
            <div id="Other_Marks">
                <h3 id="Other">Others</h3>
                <table>
                    <tr id="Other-head">
                        <th> </th>
                        <th>(Z18545)<br /><small>Ethical Hacking and Penetration Testing Laboratory</small></th>
                        <th>(Z18545)<br /><small>Ethical Hacking and Penetration Testing Laboratory</small></th>
                        <th>(Z18545)<br /><small>Ethical Hacking and Penetration Testing Laboratory</small></th>
                        <th>(Z18545)<br /><small>Ethical Hacking and Penetration Testing Laboratory</small></th>
                        <th>(Z18545)<br /><small>Ethical Hacking and Penetration Testing Laboratory</small></th>
                        <th>(Z18545)<br /><small>Ethical Hacking and Penetration Testing Laboratory</small></th>
                    </tr>
                    <tr>
                        <td>Review 1<br /> (Max 10)</td>
                        <td>{Other.Mark1}</td>
                        <td>{Other.Mark1}</td>
                        <td>{Other.Mark1}</td>
                        <td>{Other.Mark1}</td>
                        <td>{Other.Mark1}</td>
                        <td>{Other.Mark1}</td>
                    </tr>
                    <tr>
                        <td>Review 2 <br /> (Max 15)</td>
                        <td>{Other.Mark2}</td>
                        <td>{Other.Mark2}</td>
                        <td>{Other.Mark2}</td>
                        <td>{Other.Mark2}</td>
                        <td>{Other.Mark2}</td>
                        <td>{Other.Mark2}</td>
                    </tr>
                    <tr>
                        <td>Total <br />(Max 25)</td>
                        <td>{Other.Mark3}</td>
                        <td>{Other.Mark3}</td>
                        <td>{Other.Mark3}</td>
                        <td>{Other.Mark3}</td>
                        <td>{Other.Mark3}</td>
                        <td>{Other.Mark3}</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Camarks
