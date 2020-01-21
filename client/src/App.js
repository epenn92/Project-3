import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Homepage from './components/Homepage.jsx'
import Champion from './components/Champion.jsx'
import SingleChampion from './components/SingleChampion.jsx'
import NewChampion from './components/NewChampion.jsx'
import BuildPage from './components/BuildPage.jsx'
import AllResults from './components/AllResults.jsx'
import AllItems from './components/AllItems.jsx'
import UpdateChampion from './components/UpdateChampion.jsx'
import NewItem from './components/NewItem.jsx'
import UpdateItem from './components/UpdateItem.jsx'
import SingleItem from './components/SingleItem.jsx'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/champion" component={Champion} />
            <Route exact path="/champion/new" component={NewChampion} />
            <Route exact path="/champion/edit/:championId" component={UpdateChampion} />
            <Route exact path="/champion/:championId" component={SingleChampion} />
            <Route exact path="/champion/items/:championId" component={BuildPage} />
            <Route exact path="/results" component={AllResults} />
            <Route exact path="/item" component={AllItems} />
            <Route exact path="/item/new" component={NewItem} />
            <Route exact path="/item/edit/:itemId" component={UpdateItem} />
            <Route exact path="/item/:itemId" component={SingleItem} />


          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
