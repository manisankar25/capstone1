import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch, NavLink } from 'react-router-dom';
import * as userActions from '../actions/userAction';
import toastr from 'toastr';
import axios from 'axios';


import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


export class SignUpPage extends Component{
    constructor(props){
        super(props)
        this.onRegister=this.onRegister.bind(this);
    }
    onRegister(){ 
        debugger;
        let totaluserdata={}
        totaluserdata.inputEmail=this.refs.inputEmail.value;
        totaluserdata.inputPassword=this.refs.inputPassword.value;
        totaluserdata.firstName=this.refs.firstName.value;
        totaluserdata.lastName=this.refs.lastName.value;
        totaluserdata.location=this.refs.location.value;
        totaluserdata.mobileNumber=this.refs.mobileNumber.value;
        

    //     this.props.actions.addUserDetails(totaluserdata)
    //     .then(() =>{

    //     toastr.success('User added');
    //     alert("added")
    // })
    //     .catch(error => {
    //       alert(error);
    //     });


    axios.post('http://localhost:3000/userdetails',totaluserdata).then((res) => {
            console.log(res.data);
            alert("added")
        })

    }
    render(){
        return(
            <div>
                 <body>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                            <div className="card card-signin my-5">
                                <div className="card-body">
                                    <h3 className=" text-center">Register</h3>
                                    <form className="form-signin">
                                        <div className="form-label-group">
                                            <input type="email" id="inputEmail" ref="inputEmail" className="form-control" placeholder="Email address" required autoFocus></input>
                                            <label htmlFor="inputEmail">Email address</label>
                                        </div>

                                        <div className="form-label-group">
                                            <input type="password" id="inputPassword" ref="inputPassword" className="form-control" placeholder="Password" required></input>
                                            <label htmlFor="inputPassword">Password</label>
                                        </div>
                                        <div className="form-label-group">
                                            <input type="text" id="firstName" ref="firstName" className="form-control"  required></input>
                                            <label htmlFor="firstName">First Name</label>
                                        </div>
                                        <div className="form-label-group">
                                            <input type="text" id="lastName" ref="lastName" className="form-control"  required></input>
                                            <label htmlFor="lastName">Last Name</label>
                                        </div>
                                        <div className="form-label-group">
                                            <input type="text" id="location" ref="location" className="form-control" required></input>
                                            <label htmlFor="location">Location</label>
                                        </div>
                                        <div className="form-label-group">
                                            <input type="number" id="mobileNumber" ref="mobileNumber" className="form-control" required></input>
                                            <label htmlFor="mobileNumber">Mobile Number</label>
                                        </div>

                                        <button className="btn btn-lg btn-primary btn-block text-uppercase" onClick={this.onRegister} type="submit">Register</button>
                                        <hr className="my-4"></hr>

                                        <NavLink to="/" className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</NavLink>
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

function mapStateToProps(state, ownProps) {
    return {
      users: state.users
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(userActions, dispatch)
    };
  }
  export default connect(mapStateToProps,mapDispatchToProps)(SignUpPage);
