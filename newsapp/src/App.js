import './App.css';
import Navbar from './component/Navbar';
import News from './component/News';

import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes

} from "react-router-dom";

export default class App extends Component {
  pagesize=12
  apikey = process.env.REACT_APP_NEWS_API
  render() {
    return (
      <Router>
      <div>
          <Navbar/>
         <Routes>
          <Route exact path="/" element={<News pagesize={this.pagesize} apikey={this.apikey} country="in" key="general" category="general"/>}/>
          <Route exact path="/buisness" element={<News pagesize={this.pagesize} apikey={this.apikey} country="in" key="buisness" category="business"/>}/>
          <Route exact path="/entertainment" element={<News pagesize={this.pagesize} apikey={this.apikey} country="in" key="entertainment" category="entertainment"/>}/>
          <Route exact path="/general" element={<News pagesize={this.pagesize} apikey={this.apikey} country="in" key="general" category="general"/>}/>
          <Route exact path="/health" element={<News pagesize={this.pagesize} apikey={this.apikey} country="in"key="health" category="health"/>}/>
          <Route exact path="/science" element={ <News pagesize={this.pagesize} apikey={this.apikey} country="in" key="science" category="science"/>}/>
          <Route exact path="/sport" element={ <News pagesize={this.pagesize} apikey={this.apikey} country="in" key="sport" category="sport"/>}/>
          <Route exact path="/technology" element={<News pagesize={this.pagesize} apikey={this.apikey} country="in" key="technology" category="technology"/>}/>
        </Routes>
         
      </div>
      </Router>
    )
  }
}



