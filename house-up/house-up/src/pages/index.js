import React, { Component } from 'react';
import Routes from './routes';
import Header from '../components/header';
import Footer from '../components/footer';


class index extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         logInPopUp : false,
    //         signUpPopUp : false     
    //     };
    // }

    // logInPopUpHandler = () => {
    //     this.setState({
    //         logInPopUp : !this.state.logInPopUp
    //     })
    // }


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