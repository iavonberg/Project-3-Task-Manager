import React from "react";
import SubmitButton from "../components/SubmitButton"
import ResetButton from "../components/ResetButton";

const ContactForm = props => {
    let formStyle = {
        marginTop: 50,
    }

    let fieldStyle = {
        marginRight: 10,
    }
    return (
        <div style={formStyle}>
            <form>
                <fieldset>
                    <legend>Contact Us</legend>
                    <label style={fieldStyle}>First Name</label>
                    <input type="text" style={fieldStyle}/>
                    <label style={fieldStyle}>Last Name</label>
                    <input type="text" style={fieldStyle}/>
                    <label style={fieldStyle}>Email Address</label>
                    <input type="email" style={fieldStyle}/>
                    <p>
                        <label>Talk to us!</label>
                    </p>
                    <textarea rows="5" cols="40" />
                </fieldset>
            </form>
            <SubmitButton />
            <ResetButton />
        </div>
    )
}

export default ContactForm;