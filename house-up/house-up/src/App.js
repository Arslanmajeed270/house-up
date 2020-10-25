import React from 'react';
import { Route } from 'react-router-dom';

import Index from "./pages";


function App() {
  return (
    <React.Fragment>
      <Route
        exact 
        path={'/index'}     
        component={()=><Index  hideFooter={true}/> }
      />
      <Route
        exact 
        path={'/'}
        component={
          () => <Index animateHeader={true} />
        }
      />
      <Route
        exact 
        path={'/home'}
        component={
          () => <Index animateHeader={true} />
        }
      />
      <Route
        exact 
        path={'/about'}
        component={Index}
      />
      <Route
        exact 
        path={'/add-property'}
        component={Index}
      />
      <Route
        exact 
        path={'/add-product'}
        component={Index}
      />
      <Route
        exact 
        path={'/add-coupon'}
        component={Index}
      />
        <Route
        exact 
        path={'/single-vendor-:id'}
        component={Index}
      />
        <Route
        exact 
        path={'/blogs'}
        component={Index}
      />
        <Route
        exact 
        path={'/comming-soon'}
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
        path={'/single-property'}
        component={Index}
      />  
      <Route
        exact 
        path={'/professionals'}
        component={Index}
      />
    </React.Fragment>
  
  );
}

export default App;
