import React from "react";



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Pagina1 from './componentes/Pagina1';
import Pagina2 from './componentes/Pagina2';


 function App() {
  return (
    <Router>
      <div>
        <h2>Links</h2>

        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/Pagina1"> Pagina 1 </Link>
          </li>
          <li>
            <Link to="/Pagina2">Pagina 2</Link>
          </li>

        </ul>

        
        <Switch>
          <Route exact path="/">
            <home />
          </Route>
          <Route path="/Pagina1">
            <Pagina1 />
          </Route>
          <Route path="/Pagina2">
            <Pagina2 />
          </Route>
        </Switch>
          

      </div>
    </Router>
  );
}

export default App();

