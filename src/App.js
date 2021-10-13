import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CrudState from './context/crudState';



import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from './components/Header';
import Productos from './components/Productos';
import NuevoProducto from './components/NuevoProducto'
import EditarProductos from './components/EditarProducto';


function App() {
  return (
    <Router>
      <CrudState>
        <Header />
        <div className="container mt-5">
          <Switch>
            <Route exact path="/" component={Productos} />
            <Route exact path="/producto/nuevo" component={NuevoProducto} />
            <Route exact path="/producto/editar/:id" component={EditarProductos} />
          </Switch>
        </div>
      </CrudState>
    </Router>
  );
}

export default App;
