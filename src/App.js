import logo from './logo.svg';
import './App.css';
import { Route, Router, Switch } from 'react-router-dom';
import {createBrowserHistory} from "history";
import Title from "./Components/Title.jsx";
import Pizza from "./Components/Pizza.jsx";
import Ingredients from "./Components/Ingredients.jsx";
import Calzone from "./Components/Calzone.jsx";
import NothingFound from "./Components/NothingFound.jsx";

const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
              <Route exact path="/" component={Title}></Route>
              <Route path="/order/pizza" component={Pizza}></Route>
              <Route path="/order/calzone" component={Calzone}></Route>
              <Route path="/ingredients" component={Ingredients}></Route>
              <Route component={NothingFound}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
