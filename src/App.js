import React, { Component } from 'react';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';


class App extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render(){
        return (
            <BrowserRouter>
                <div className='App'>
                    <div>
                        <NavBar />
                    </div>
                        <Switch>
                            <Route exact path='/' render={props => (<About/>)} />
                            <Route path='/experience' render={props => (<Experience/>)} />
                            <Route path='/projects' render={props => (<Projects/>)} />
                        </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
export default App;