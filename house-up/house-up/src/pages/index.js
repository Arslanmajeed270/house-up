import React, { Component } from 'react';
import Routes from './routes';
import Header from '../components/header';
import Footer from '../components/footer';


class index extends Component {

    render() {
        const animateHeader = this.props.animateHeader;
        return (
            <React.Fragment>
                <Header animateHeader={animateHeader} />
                <Routes />
                {this.props.hideFooter === true ? " " : <Footer /> }
            </React.Fragment>
        )
    }
}

export default index;