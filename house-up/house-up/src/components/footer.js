import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import ic_instagram from '../assets/images/ic_instagram.svg'

class footer extends Component {

  state= {
    intervalId: 0,
    scrollStepInPx:"50",
    delayInMs:"16.66"
  }

  scrollToTop() {
    let intervalId = setInterval(this.scrollStep.bind(this), this.state.delayInMs);
    this.setState({ intervalId: intervalId });
  }
   scrollStep() {
    if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.state.scrollStepInPx);
  }

  render() {
    return (
      <React.Fragment>
        <div className='pxp-footer pb-100'>
          <div className='container'>
            <div
              className='pxp-footer-bottom mt-2 row'
              style={{ textAlign: 'left' }}
            >
              <div className='col-md-4'>
                <a href="https://www.linkedin.com/in/houseup-ca-132ba8202" className='social-icons'>
                  <img
                    src={require('../assets/images/ic_linkedin.svg')}
                    alt=''
                  />
                </a>
                <a href="https://www.facebook.com/houseup.ca/" className='social-icons'>
                  <img
                  style={{width: "34.45px", height: "34.45px"}}
                    src={require('../assets/images/ic_facebook.svg')}
                    alt=''
                  />
                </a>
                <a href="https://www.instagram.com/houseup.ca/"  className='social-icons'>
                  <img
                    src={require('../assets/images/ic_instagram.svg')}
                    alt=''
                  />
                </a>
                <a href="https://twitter.com/home?logout=1609437552247" className='social-icons'>
                  <img
                    src={require('../assets/images/ic_twitter.svg')}
                    alt=''
                  />
                </a>
              </div>
              <div className='pxp-footer-copyright col-md-4'>
                © HouseUP All Rights Reserved. 2020
              </div>
              <div className='col-md-4'>
                <Link to='/privacy'>Terms &amp; Conditions</Link> and{' '}
                <Link to='/privacy'>Privacy Policy</Link>
              </div>
            </div>
          </div>
          <button title='Back to top' className='scroll-btn' 
               onClick={ () => { this.scrollToTop(); }}>
                <span className='fa fa-arrow-up'></span>
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default footer;
