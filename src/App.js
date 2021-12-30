import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Shop from './pages/Shop/Shop';
import SingleProduct from './pages/SingleProduct/SingleProduct';
import Register from './pages/Register/Register';
import Products from './components/Products/Products';

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
            
            <Route path="/product/:id">
              <SingleProduct></SingleProduct>
            </Route>
            <Route path="/cart">
              <Cart></Cart>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            
          </Switch>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
