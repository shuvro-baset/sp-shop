import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import AddPosts from './pages/AddPosts/AddPosts';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

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
            {/* <Route path="/shop">
              <Shop></Shop>
            </Route>
            <Route path="/product/:id">
              <SingleProduct></SingleProduct>
            </Route> */}
            <Route path="/add-posts">
              <AddPosts />
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
