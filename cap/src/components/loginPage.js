import React, { Component } from 'react';
import LoadData from '../apicalls/AllApiCalls';
import { BrowserRouter as Router, Route, Redirect, Switch, NavLink } from 'react-router-dom';
import AllApiCall from '../apicalls/AllApiCalls';
import axios from 'axios';
import Home from './home';
import { withRouter } from "react-router";

 class LoginPage extends Component {
    constructor(props) {
        super(props)
        this.state={
            showmodal:false
        }
        this.onSignIN = this.onSignIN.bind(this);
    }

    onSignIN() {
        var msg = "";
        debugger
        let user = {}
        user.inputEmail = this.refs.inputEmail.value;
        user.inputPassword = this.refs.inputPassword.value;
        console.log(user);
        axios.get("http://localhost:3000/userdetails").then((res) => {
            console.log(res.data);
            for (var i = 0; i < res.data.length; i++) {
                if (user.inputEmail == res.data[i].inputEmail && user.inputPassword == res.data[i].inputPassword) {
                    alert("logged in");
                    console.log("pussss",this.props)
                    this.props.history.push('/home');
                } 
                // else {
                //     msg = "please enter valid data";
                //     alert("nooooooooooooo");
                // }
            }
        })
    }

    render() {
        return (
<div>
            <body>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                            <div className="card card-signin my-5">
                                <div className="card-body">
                                    <h3 className=" text-center">Sign In</h3>
                                    <form className="form-signin">
                                        <div className="form-label-group">
                                            <input type="email" id="inputEmail" ref="inputEmail" className="form-control" placeholder="Email address" required autoFocus></input>
                                            <label htmlFor="inputEmail">Email address</label>
                                        </div>

                                        <div className="form-label-group">
                                            <input type="password" id="inputPassword" ref="inputPassword" className="form-control" placeholder="Password" required></input>
                                            <label htmlFor="inputPassword">Password</label>
                                        </div>

                                        <button className="btn btn-lg btn-primary btn-block text-uppercase" onClick={this.onSignIN} type="submit">Sign in</button>
                                        <hr className="my-4"></hr>

                                        <NavLink to="/signup" className="btn btn-lg btn-primary btn-block text-uppercase" >Register</NavLink>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
            
            </div>
        )
    }
}



export default withRouter(LoginPage)