import React from "react";
class Add extends React.Component {
  render() {
    return (
    <div>
        <div class="addEventForm">
            <h2>Add an Event</h2>
            <form class="addform" action="https://formspree.io/xgeypedl" method="POST">
                <div>
                    <label>First Name:</label>
                    <input type="text" id="fname" name="firstname"></input>
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" id="lname" name="lastname"></input>
                </div>
                <div>
                    <label>Name of Event:</label>
                    <input type="text" id="ename" name="nameofevent"></input>
                </div>
                <div>
                    <label>Name of Organization:</label>
                    <input type="text" id="oname" name="organizationname"></input>
                </div>
                <div>
                    <label>Date of Event:</label>
                    <input type="text" id="date" name="startdate"></input>
                </div>
                <div>
                    <label>Time of Event:</label>
                    <input type="text" id="time" name="timeofevent"></input>
                </div>
                <div>
                    <label>Location of Event:</label>
                    <input type="text" id="location" name="locationofevent"></input>
                </div>
                <div>
                    <label>E-mail Address:</label>
                    <input type="email" id="email" name="emailaddress"></input>
                </div>
                <div>
                    <label>Contact Number:</label>
                    <input type="tel" id="number" name="phonenumber"></input>
                </div>
                <div>
                    <input type="submit" id="submit"></input>
                </div>
            </form>
        </div>
    </div>
    );
  }
}

export default Add;