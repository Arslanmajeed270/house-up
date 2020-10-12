import React from 'react';
import { Route } from 'react-router-dom';

import Index from "./pages";

function App() {
  return (
    <React.Fragment>
                <Route      
                    exact 
                    path={"/"} 
                    component={
                        () => <Index />
                    }
                />
                <Route      
                    exact 
                    path={"/login"} 
                    component={
                        () => <Index />
                    }
                />
                <Route      
                    exact 
                    path={"/index"} 
                    component={
                        () => <Index />
                    }
                />
                <Route      
                    exact 
                    path={"/account"} 
                    component={
                        () => <Index/>
                    }
                />
                <Route      
                    exact 
                    path={"/boost"} 
                    component={
                        () => <Index />
                    }
                />
                <Route      
                    exact 
                    path={"/charts"} 
                    component={
                        () => <Index />
                    }
                />
                <Route      
                    exact 
                    path={"/feature"} 
                    component={
                        () => <Index />
                    }
                />
                <Route      
                    exact 
                    path={"/helper"} 
                    component={
                        () => <Index />
                    }
                />
                <Route      
                    exact 
                    path={"/properties"} 
                    component={
                        () => <Index />
                    }
                />
                <Route      
                    exact 
                    path={"/single-prop"} 
                    component={
                    () => <Index />
                }
                />
                <Route      
                    exact 
                    path={"/single-user"} 
                    component={
                        () => <Index />
                    }
                />
                <Route      
                    exact 
                    path={"/single-vendor"} 
                    component={
                        () => <Index />
                    }
                />
                <Route      
                    exact 
                    path={"/user"} 
                    component={
                        () => <Index />
                    }
                />
                <Route      
                    exact 
                    path={"/Vendors"} 
                    component={
                        () => <Index />
                    }
                />
    </React.Fragment>
  );
}

export default App;
