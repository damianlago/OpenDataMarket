import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Navbar from './layout/navbar/Navbar'
import Footer from './layout/footer/Footer'
import SideBar from './layout/sideBar'

import Index from './pages/index/Index'
import Login from './pages/login/Login'
import Signup from "./pages/singup/Singup";

import authService from './../service/auth.service'

import './App.css';


class App extends Component {

  constructor() {
    super()
    this.state = {
      loggedInUser: undefined
    }
    this.authService = new authService()
  }


  componentDidMount = () => this.fetchUser()

  setTheUser = user => this.setState({ loggedInUser: user }, () => console.log('El usuario es', this.state.loggedInUser))

  fetchUser = () => {
    this.authService
      .isLoggedIn()
      .then(response => this.setState({ loggedInUser: response.data }))
      .catch(err => this.setState({ loggedInUser: null }))
  }

  logoutUser = () => {
    this.authService
      .logout()
      .then(() => this.props.setTheUser(null))
      .catch(err => console.log('Error!:', err))
  }

  render() {
    return (
      <>
        {/* <Navbar setTheUser={this.setTheUser} loggedInUser={this.state.loggedInUser} /> */}
        <SideBar logoutUser={this.logoutUser} />
        <Switch>
          <Route path="/" exact render={() => <Index />} />
          <Route path="/signup" render={props => <Signup setTheUser={this.setTheUser} {...props} />} />
          <Route path="/login" render={props => <Login setTheUser={this.setTheUser} {...props} />} />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
