import './App.css';
import Home from './components/home';
import Addproduct from './components/addProduct';
import ProductDetails from './components/productDetails'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from './components/loginPage';

import SignUpPage from './components/signUpPage';

function App() {
  return (
    <div className="App" style={{ backgroundColor: "b3ecff" }}>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Home</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="/addProduct">Add Product <span className="sr-only">(current)</span></a>
            <a className="nav-item nav-link" href="#">About</a>

          </div>
        </div>
      </nav>


      <Router>
        <Switch>
          <Route exact path='/' > <LoginPage /></Route>
          <Route path='/signup'>  <SignUpPage /></Route>
          <Route path='/addProduct'> <Addproduct /></Route>
          <Route path='/productDetails'><ProductDetails /></Route>
          <Route path='/home'><Home /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
