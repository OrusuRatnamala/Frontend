import React from "react";
import './FValidations.css';
class FValidation extends React.Component {
    constructor() {
        super();
        this.state = {
            fields: {},
            errors: {}
        }
        this.handleChange = this.handleChange.bind(this);
        this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
    };
    handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
            fields
        });
    }
    submituserRegistrationForm(e) {
        e.preventDefault();
        if (this.validateForm()) {
            alert("From filled Succesfully");
 
        }
    }
    validateForm() {
        let fields = this.state.fields
        let fvalid = true;
        let errors = {};
    console.log(fields["username"])
        if (fields["username"]==undefined) {
            fvalid = false;
            errors["username"] = "*Username cannot be less than 5 characters.";
        }
        if (fields["mobileno"]==undefined) {
            fvalid = false;
            errors["mobileno"] = "*Please enter full mobile number.";
        }
        if (fields["password"]) {
            fvalid = false;
            errors["password"] = "*Password must have 8 characters.";
        }
        if (fields["emailid"]) {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (pattern.test(fields["emailid"])) {
                fvalid = false;
                errors["emailid"] = "*Email should contain @ symbol.";
            }
        }
       
        if (!fields["emailid"]) {
            fvalid = false;
            errors["emailid"] = "*Please enter your email-ID.";
        }
        if (!fields["mobileno"]) {
            fvalid = false;
            errors["mobileno"] = "*Please enter your mobile no.";
        }
        if (!fields["password"]) {
            fvalid = false;
            errors["password"] = "*Please enter your password.";
        }
 
            this.setState({ errors: errors });
       
        return fvalid;
    }
 
    render() {
        return (
            <div id="main-registration-container">
                <div id="register">
                    <form method="post" name="userRegistrationForm" onSubmit={this.submituserRegistrationForm}>
                        <label>Name</label>
                        <input type="text" name="username" value={this.state.fields.username} onChange={this.handleChange} />
                        <div className="errorMsg">{this.state.errors.username}</div>
                        <label>Email ID:</label>
                        <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange} />
                        <div className="errorMsg">{this.state.errors.emailid}</div>
                        <label>Mobile No:</label>
                        <input type="text" name="mobileno" value={this.state.fields.mobileno} onChange={this.handleChange} />
                        <div className="errorMsg">{this.state.errors.mobileno}</div>
                        <label>Password</label>
                        <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
                        <div className="errorMsg">{this.state.errors.password}</div>
                        <input type="submit" className="button" value="Register" />
 
                    </form>
                </div>
            </div>
        )
    }
}
export default FValidation;