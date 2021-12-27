import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';


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
            <Route path="/shop">
              <Shop></Shop>
            </Route>
            
          </Switch>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
