import React, { Component } from 'react';
import joi from 'joi-browser';


class Login extends Component {
    state = { 
        username : "",
        password : "",
        errors : {}
     } 
     schema = {
      username : joi.string().required(),
      password : joi.string().required(),
     }
     handlesubmit = e =>{
        e.preventDefault();
        let errors = this.validate();
        if(errors) return;
        console.log("Back End");
     }

     validate = ()=>{
        const errors = {};
        const state = {...this.state};
        delete state.errors;
       let res = joi.validate(state, this.schema, {abortEarly:false})
      if(res.error === null){
        this.setState({errors: {}})
        return null
      } ;
      for(const error of res.error.details){
        errors[error.path] = error.message; 
      }
        console.log(res);
        this.setState({errors})
     }

     handleChange = e =>{
        let state = {...this.state}
        state[e.currentTarget.name] = e.currentTarget.value
        this.setState(state)
     }

    render() { 
        return (
  <div className="container">
  <form onSubmit={this.handlesubmit}>
  <div>
    <label htmlFor="email" className="form-label">Email address</label>
    <input 
    name='username'
    value = {this.state.username}
    onChange = {this.handleChange}
    type="email" className="form-control" id="email"/>
  </div>
 {this.state.errors.username && <div className="alert alert-danger m-0">{this.state.errors.username}</div>}
  <div>
    <label htmlFor="password" className="form-label">Password</label>
    <input 
    name='password'
    value={this.state.password}
    onChange={this.handleChange}
    type="password" className="form-control" id="password"/>
  </div>
  {this.state.errors.password && <div className="alert alert-danger m-0">{this.state.errors.password}</div>}
  <button type="submit" className="btn btn-primary mt-3">Submit</button>
</form>
       </div>
        );
    }
}
 
export default Login;