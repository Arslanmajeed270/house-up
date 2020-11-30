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
              style={{ textAlign: 'center' }}
            >
              <div className='col-md-4'>
                <Link className='social-icons'>
                  <img
                    src={require('../assets/images/ic_linkedin.svg')}
                    alt=''
                  />
                </Link>
                <Link className='social-icons'>
                  <img
                    src={require('../assets/images/ic_facebook.svg')}
                    alt=''
                  />
                </Link>
                <Link className='social-icons'>
                  <img
                    src={require('../assets/images/ic_instagram.svg')}
                    alt=''
                  />
                </Link>
                <Link className='social-icons'>
                  <img
                    src={require('../assets/images/ic_twitter.svg')}
                    alt=''
                  />
                </Link>
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