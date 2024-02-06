
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
      <Route  path = "/" component = {Home}/>
      <Route  path="/listing/:mealId" component = {Listing}/>
      <Route  path="/details" component={Details} />
      <Route  path="/placeorder/:restName" component = {Placeorder}/>
      <Route  path = "/Login" component = {Login}/>
      <Route  path = "/Register" component = {Registration}/>
      <Route  path = "/vieworder" component = {Vieworder}/>
    </div>
  );
}

export default App;
