import React from 'react';
import{ BrowserRouter, Route } from 'react-router-dom';

// paginas
import Landing from './pages/Landing';
import Teachers from './pages/Teachers';
import TeachersForm from './pages/TeachersForm';

function Routes() {
  return (
    <BrowserRouter>

      <Route path="/" exact component={Landing} />
      <Route path="/study" component={Teachers} />
      <Route path="/give-classes" component={TeachersForm} />

    </BrowserRouter>
  );
}

export default Routes;