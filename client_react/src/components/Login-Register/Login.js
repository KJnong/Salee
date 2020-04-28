import React, { Component } from "react";
import '../ComponentStyle/LogReg.css'
import auth from '../PrivateRoute/auth'

export default class Login extends Component {

    LoginUser = async (e)=> {
        e.preventDefault();

        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value

        const user = {
            email,
            password
        }

        const response = await fetch('http://localhost:5000/user/login',{
            method: 'Post',
            body: JSON.stringify(user),
            headers:{'content-type':'application/json'}})
     
        const {token} = await response.json();

        auth.login(()=>{
            localStorage.setItem('auth-token', token) 
            this.props.history.push('/retailer')
        })
        
        
    }

    render() {
        return (
        <div className="auth-inner">

            <form onSubmit = {this.LoginUser} >
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" name= "email" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" name = "password" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        </div>
        );
    }
}