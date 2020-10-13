const routesPrefix = '/';


export const redirectDashboardIfAlreadyLogin = (auth, history) =>{
    if (auth && auth.isAuthenticated ) {
        history.push(`${routesPrefix}dashboard`);
        return true;
    }
    return false;
}