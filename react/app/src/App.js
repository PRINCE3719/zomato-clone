
import './App.css';
import {Route} from "react-router-dom";
import Home from './Components/Home';
import Listing from './Components/Listing/Listing';
import Details from './Components/details/Details';

function App() {
  return (
    <div className="App">
      <Route exact path = "/" component = {Home}/>
      <Route exact path="/listing/:mealId" component = {Listing}/>
      <Route path="/details" component={Details} />
    </div>
  );
}

export default App;