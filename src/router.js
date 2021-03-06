import React from 'react'
import {HashRouter as Router , Route , Switch,Link} from 'react-router-dom'
import LoginModule from './login'
import App from "./App"


export default class MyRoute extends React.Component{
    render(){
        return(
            <Router>
                <Link to='/Sign in'></Link>
                <Switch>
                    <Route exact path="/" component={LoginModule}/> 
                    <Route path="/Sign in" component={App}/>
                </Switch>
            </Router>
        )
    }  
}