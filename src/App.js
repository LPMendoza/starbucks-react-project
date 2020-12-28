import Home from "./pages/Home.js";
import Menu from "./pages/Menu.js";
import Cart from "./pages/Cart.js";
import Contact from "./pages/Contact.js";

import {Switch, Route, BrowserRouter} from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.css";
import './assets/css/style.css';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/starbucks-page/" component={Home} />
        <Route exact path="/starbucks-page/menu" component={Menu} />
        <Route exact path="/starbucks-page/cart" component={Cart} />
        <Route exact path="/starbucks-page/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
