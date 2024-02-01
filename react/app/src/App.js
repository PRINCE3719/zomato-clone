
import './App.css';
import {Route} from "react-router-dom";
import Home from './Components/Home';
import Listing from './Components/Listing/Listing';
import Details from './Components/details/Details';
import Placeorder from './Components/Placeorder/Placeorder';
import Login from './Components/Login/Login';
import Registration from './Components/registration/Registration';

function App() {
  return (
    <div className="App">
      <Route exact path = "/" component = {Home}/>
      <Route exact path="/listing/:mealId" component = {Listing}/>
      <Route exact path="/details" component={Details} />
      <Route exact path="/Placeorder" component = {Placeorder}/>
      <Route exact path = "/Login" component = {Login}/>
      <Route exact path = "/Register" component = {Registration}/>
    </div>
  );
}

export default App;
