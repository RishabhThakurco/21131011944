import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllProductsPage from './pages/AllProductsPage';
import SingleProductPage from './pages/SingleProductPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={AllProductsPage} />
        <Route path="/product/:id" component={SingleProductPage} />
      </Switch>
    </Router>
  );
}

export default App;