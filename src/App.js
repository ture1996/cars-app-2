import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import { GuardedRoute } from "./components/common/GuardedRoute";
import GuestRoute from "./components/common/GuestRoute";
import { NavBar } from "./components/common/NavBar";
import { SingleMovieDetails } from "./components/SingleMovieDetails";
import { AddCarPage } from "./pages/AddCarPage";
import { CarPage } from "./pages/AppCarPage";
import { AppCarsPage } from "./pages/AppCarsPage";
import { EditCarPage } from "./pages/EditCarPage";
import { Login } from "./pages/LoginPage";
import { authService } from "./services/AuthService";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavBar logout={()=>authService.logout()}/>
        </header>
        <Switch>
          <GuardedRoute component={AppCarsPage} exact path="/cars"/>
          <GuardedRoute component={AddCarPage} path="/add"/>
          <GuardedRoute component={CarPage} path="/cars/:id"/>
          <GuestRoute component={Login} path="/login"/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}



export default App;
