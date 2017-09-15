import React from 'react';
import {
   BrowserRouter,
   Route,
   Switch
} from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import Gallery from './Gallery';
import About from './About';

const App = () => (
   <BrowserRouter>
      <div className="container">
         <Header/>
         <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/gallery" component={Gallery}/>
            <Route exact path="/about" component={About}/>
         </Switch>
      </div>
   </BrowserRouter>
);

export default App;
