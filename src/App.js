import { BrowserRouter, Route, Switch } from "react-router-dom";

//components
import Navbar from "./components/Navbar";

//page components
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Search from "./pages/search/Search";
import Article from "./pages/article/Article";
//styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/create">
            <Create />
          </Route>

          <Route path="/search">
            <Search />
          </Route>

          <Route path="/article/:id">
            <Article />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
