import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header/Header';
import ProductFeed from './components/Products/ProductFeed/ProductFeed';
import ProductPost from './components/Products/ProductPost/ProductPost';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <ProductFeed />
        </Route>
        <Route path='/product/:id'>
          <ProductPost />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
