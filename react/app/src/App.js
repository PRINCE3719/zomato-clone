
import './App.css';
import {Route} from "react-router-dom";
import Home from './Components/Home';
import Listing from './Components/Listing/Listing';
import Details from './Components/details/Details';
import {Placeorder} from './Components/Placeorder/Placeorder';
import Login from './Components/Login/Login';
import Registration from './Components/registration/Registration';
import {Vieworder} from './Components/booking/Vieworder';

function App() {
  return (
    <div className="App">
      <Route exact path = "/" component = {Home}/>
      <Route exact path="/listing/:mealId" component = {Listing}/>
      <Route exact path="/details" component={Details} />
      <Route exact path="/placeorder/:restName" component = {Placeorder}/>  
      <Route exact path = "/Login" component = {Login}/>
      <Route exact path = "/Register" component = {Registration}/>
      <Route exact path = "/vieworder" component = {Vieworder}/>
    </div>
  );
}

export default App;
