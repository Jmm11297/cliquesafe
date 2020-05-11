import React from "react";
class Contact extends React.Component {
    render() {
        return (
        <div>
            <div class="about">
                <h2>About</h2>
                <p>This website began as a capstone project for a brand new developer who aspires to grow in their role and gain experience as a front-end web developer.</p>
            </div>       
            <div class="contactForm">
                <h2>Contact</h2>
                    <form class="contact" action="https://formspree.io/xgeypedl" method="POST">
                        <div>
                            <label>First Name:</label>
                            <input type="text" id="fname" name="firstname" placeholder="First Name"></input>
                        </div>
                        <div>
                            <label>Last Name:</label>
                            <input type="text" id="lname" name="lastname" placeholder="Last Name"></input>
                        </div>
                        <div>
                            <label>E-mail Address:</label>
                            <input type="email" id="email" name="email" placeholder="E-mail Address"></input>
                        </div>
                        <div>
                            <label>Write Your Message Here:</label>
                            <textarea name="msg" id="msg" cols="40" rows="5" placeholder="A Brief Message..."></textarea>
                        </div>
                        <div>
                            <input type="submit" id="submit" placeholder="Submit"></input>
                        </div>
                    </form>
                </div>
            </div>
        );
    };
};
export default Contact;