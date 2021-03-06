import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Main from './Main'
import Card from './Card'

class App extends Component {
  state = {}
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/:tableName/:qNum" component={Card} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
