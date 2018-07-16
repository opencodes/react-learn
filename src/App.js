import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Header} from "./componens/Header/Header";
import {Checkout} from "./containers/Checkout";
import {Footer} from "./componens/Footer/Footer";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header></Header>
                <Checkout/>
                <Footer/>
            </div>
        );
    }
}
export default App;
