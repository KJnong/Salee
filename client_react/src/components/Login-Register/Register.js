import React, { Component } from "react";
import '../ComponentStyle/LogReg.css'

export default class SignUp extends Component {

    RegisterUser = async (e)=> {
        e.preventDefault();

        const name = e.target.elements.name.value;
        const content = e.target.elements.content.value

        const newUser = {
            name,
            content
        }

        const API_post = await fetch('http://localhost:5000/user/register',{
            method: 'Post',
            body: JSON.stringify(newUser),
            headers:{'content-type':'application/json'}})

        const response2 = await API_post.json();

        this.setState({ response: response2 });
     

    }



    render() {
        return (
            <div className="auth-inner">
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/sign-in">sign in?</a>
                </p>
            </form>
            </div>
        );
    }
}