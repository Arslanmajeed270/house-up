import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import ic_instagram from '../assets/images/ic_instagram.svg'

class footer extends Component {
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
        </div>
      </React.Fragment>
    );
  }
}

export default footer;
