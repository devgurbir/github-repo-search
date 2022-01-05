import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Homepage from '../Pages/Homepage'
import Login from '../Pages/Login'
import Searchpage from '../Pages/Searchpage'

const AllRoutes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Homepage />
            </Route>
            <Route exact path="/login">
                <Login />
            </Route>
            <Route exact path="/search">
                <Searchpage />
            </Route>
        </Switch>
    )
}

export default AllRoutes
