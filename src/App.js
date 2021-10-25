import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './component/Home';
import Layout from './layout/Layout';
import MovieDetail from './component/MovieDetail';
import './App.css';




function App() {

      return (
        <div className="App">
          <Router>
            <Layout>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/movie/:id" component={MovieDetail} />
              </Switch>
            </Layout>
          </Router>
        </div>
      );
}

export default App;
