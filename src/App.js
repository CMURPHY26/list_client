import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import {Route, Link} from 'react-router-dom'
import Lists from './components/Lists.js'
import ListContainer from './components/ListContainer.js'

function App() {
  return (
    <div className="App">
      <header>
        <h1 id="logo">MyList</h1>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </header>
      <Route exact path="/" component={Lists} />
      <Route path="/lists/:id" component={ListContainer} />
    </div>
  );
}

export default App;
