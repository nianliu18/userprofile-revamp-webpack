import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './main.css';


class App extends Component {
    constructor() {
        super();
        this.state = {};
    }


    render(){
        return (
            <div>
               <h1> Online Profile Here </h1>
               <div className="loaderbar">
                   Loading...
               </div>
            </div>
        )
    }
}
export default App;

// ReactDOM.render(<App />, document.getElementById("root"));