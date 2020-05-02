import React, { Component } from "react";
import '../ComponentStyle/LogReg.css';
import auth from '../PrivateRoute/auth';

export default class SignUp extends Component {

    state = {status:null}

    RegisterUser = async (e)=> {
        e.preventDefault();

        const retailer = e.target.elements.retailer.value;
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value

        const newUser = {
            retailer,
            email,
            password
        }

        const {status} = await fetch('http://localhost:5000/user/register',{
            method: 'Post',
            body: JSON.stringify(newUser),
            headers:{'content-type':'application/json'}})
        
        if (status===200) {
                localStorage.clear();
                this.props.history.push('/sign-in')  
            }
        
        
        
        // this.setState({ status : status });
     
    }



    render() {
        return (
            <div className="auth-inner">
            <form onSubmit={this.RegisterUser}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Retailer</label>
                    <input type="text" className="form-control" name='retailer' placeholder="Retailer" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" name='email' placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" name='password' placeholder="Enter password" />
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