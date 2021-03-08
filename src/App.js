import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import NotFound from "./Components/NotFound/NotFound";
import PostComments from "./Components/PostComments/PostComments";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
          <Route path='/home'>
              <Home />
          </Route>
          <Route path="/post/:id">
            <PostComments />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
      </Switch>
     <Footer />
    </Router>
  );
}

export default App;
