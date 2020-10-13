import React from 'react';
import { Route } from 'react-router-dom';

import Index from "./pages";


function App() {
  return (
    <React.Fragment>
      <Route
        exact 
        path={'/'}
        component={Index}
      />
      <Route
        exact 
        path={'/about'}
        component={Index}
      />
        <Route
        exact 
        path={'/add-new-prop'}
        component={Index}
      />
        <Route
        exact 
        path={'/single-vendor'}
        component={Index}
      />
        <Route
        exact 
        path={'/blogs'}
        component={Index}
      />
        <Route
        exact 
        path={'/coming-soon'}
        component={Index}
      />
        <Route
        exact 
        path={'/comments'}
        component={Index}
      />
        <Route
        exact 
        path={'/contact'}
        component={Index}
      />
        <Route
        exact 
        path={'/home'}
        component={Index}
      />
        <Route
        exact 
        path={'/privacy'}
        component={Index}
      />
      <Route
        exact 
        path={'/properties'}
        component={Index}
      />
      <Route
        exact 
        path={'/single-post'}
        component={Index}
      />
      <Route
        exact 
        path={'/single-prop'}
        component={Index}
      />  
      <Route
        exact 
        path={'/vendors'}
        component={Index}
      />
      <Route
        exact 
        path={'/index'}
        component={Index}
      /> 
    </React.Fragment>
  );
}

export default App;
