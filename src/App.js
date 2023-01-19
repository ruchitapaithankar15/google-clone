import './App.css';
import Home from './pages/Home';
import Search from './pages/Search';
import React from "react";
import SearchPage from './pages/SearchPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/search'>
            <SearchPage/>
          </Route>
          <Route path='/'>
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
