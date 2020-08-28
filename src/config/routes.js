import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import ToolList from '../pages/ToolList'
import ToolShow from '../pages/ToolShow'
import NewTool from '../pages/NewTool'
import Login from '../pages/Login'
import Register from '../pages/Register'

export default (props) => (
  <Switch>
    <Route exact path='/' component={ Home } />
   
    <Route path="/register" component={ Register } />
    <Route path="/login" render={ (routeComponentProps) => {
      return <Login 
               { ...routeComponentProps }
               currentUser={ props.currentUser }
               storeUser={ props.storeUser }
             />
    }} />
    <Route path="/tools/new" component={ NewTool } />
    <Route path='/tools/:id' component={ ToolShow } />
    <Route path='/tools' component={ ToolList } />
  </Switch>
)