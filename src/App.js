import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import { SingleMovieDetails } from "./components/SingleMovieDetails";
import { AddCarPage } from "./pages/AddCarPage";
import { CarPage } from "./pages/AppCarPage";
import { AppCarsPage } from "./pages/AppCarsPage";
import { EditCarPage } from "./pages/EditCarPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <nav>
            <Link to="/cars"> Cars </Link>
            <Link to="/add"> Add </Link>
            <hr />
          </nav>
        </header>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <Redirect to="/cars" />;
            }}
          />
          <Route exact path="/cars">
            <AppCarsPage />
          </Route>
          <Route path="/add">
            <AddCarPage />
          </Route>
          <Route path="/edit/:id">
            <EditCarPage />
          </Route>
          <Route path="/cars/:id">
            <CarPage/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
