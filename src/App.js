import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import SingleProduct from './pages/SingleProduct/SingleProduct';


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
            <Route path="/single-product">
              <SingleProduct></SingleProduct>
            </Route>
            <Route path="/cart">
              <Cart></Cart>
            </Route>
            
          </Switch>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
