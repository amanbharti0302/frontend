import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import Navbar from './Components/navbar/navbar.component';
import Footer from './Components/footer/footer.component';
import Homepage from './pages/home/home.component';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Homepage}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
