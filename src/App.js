import React from 'react';
// route的导入既可以在这里，也可以在Index那里导入，但导入的东西有所区别
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Movie from './SingleMovie';

function App() {
  return (
    <Switch>
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/movies/:id' children={<Movie />}></Route>
    </Switch>
  );
}

export default App;
