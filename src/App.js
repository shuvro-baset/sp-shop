import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';


function App() {
  return (
    <>
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          
        </Switch>
      </Router>
    </>
  );
}

export default App;
