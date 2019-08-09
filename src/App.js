import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Homepage from './pages/hompage/Homepage'
import ShopPage from './pages/shop/ShopPage'
import Header from './components/header/Header'
import './App.css'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  )
}

export default App
