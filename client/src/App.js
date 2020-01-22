import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Homepage from './components/Homepage.jsx'
import Champion from './components/Champion.jsx'
import SingleChampion from './components/SingleChampion.jsx'
import NewChampion from './components/NewChampion.jsx'
import BuildPage from './components/BuildPage.jsx'
import AllBuilds from './components/AllBuilds.jsx'
import AllItems from './components/AllItems.jsx'
import UpdateChampion from './components/UpdateChampion.jsx'
import NewItem from './components/NewItem.jsx'
import UpdateItem from './components/UpdateItem.jsx'
import SingleItem from './components/SingleItem.jsx'
import SingleBuild from './components/SingleBuild.jsx'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/champion" component={Champion} />
              <Route exact path="/champion/new" component={NewChampion} />
              <Route exact path="/champion/edit/:championId" component={UpdateChampion} />
              <Route exact path="/champion/:championId" component={SingleChampion} />
              <Route exact path="/champion/items/:championId" component={BuildPage} />
              <Route exact path="/build" component={AllBuilds} />
              <Route exact path="/build/:buildId" component={SingleBuild} />
              <Route exact path="/item" component={AllItems} />
              <Route exact path="/item/new" component={NewItem} />
              <Route exact path="/item/edit/:itemId" component={UpdateItem} />
              <Route exact path="/item/:itemId" component={SingleItem} />

              <div class="wrap">
                <nav class="navbar">
                  <ul class="navbarOptions">
                    <li>
                      <a class="brand" href="/">
                        <img src="https://github.com/epenn92/Project-2/blob/master/images/brand.png?raw=true">
              </a></li>
                      <li><a href="/">Home</a></li>
                      <li><a href="/restaurant">Restaurants</a></li>
                      <li><a href="/menu">Menus</a></li>
                      <li><a href="/item">Food Items</a></li>
                      <li><a href="#">Top Rated</a></li>
                      <li><a href="#">Contact Us</a></li>
              
              </ul>
            </nav>

            </div>

            </Switch>

            
          </div>
        </Router>


          );
        }
      }
      
      export default App;
