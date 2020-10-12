import React, { Component } from 'react';
import Routes from './routes';
import Header from '../components/header';
import Footer from '../components/footer';


class index extends Component {


    render() {
        return (
            <React.Fragment>
                <Header />
                <Routes />
                <Footer />            
            </React.Fragment>
        )
    }
}

export default index;