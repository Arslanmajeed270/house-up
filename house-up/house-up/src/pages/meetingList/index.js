import React from 'react';
import '../../assets/custom-css/style.css';
import { Link } from 'react-router-dom'

export default function index() {
    return (
        <div className="wrapper">
        <div className="my_request_main">
          <h2>My Request</h2>
          <div className="my_request_boxes">
            <div className="img_sec">
              <div className="img">
                <img src={require('../../assets/images/houseup_request_main.jpg')} alt="request_main" />
              </div>
              <div className="cont">
                <h3>Shirley Douglas</h3>
                <h3>Toronto <span className="status">Join Now</span></h3>
              </div>
              <div className="details_dot">
                <img src={require('../../assets/images/dots_details.png')} alt="dots_details" />
              </div>
              <div className="clear" />
            </div>
            <p className="span_meta">Call request timing <span className="time">21/06/2020</span> <span className="date">08:20</span></p>
            <p className="content_para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="my_request_boxes">
            <div className="img_sec">
              <div className="img">
                <img src={require("../../assets/images/houseup_request_main.jpg")} alt="request_main" />
              </div>
              <div className="cont">
                <h3>Shirley Douglas</h3>
                <h3>Toronto <span className="status">Join Now</span></h3>
              </div>
              <div className="details_dot">
                <img src={require("../../assets/images/dots_details.png")} alt="dots_details" />
              </div>
              <div className="clear" />
            </div>
            <p className="span_meta">Call request timing <span className="time">21/06/2020</span> <span className="date">08:20</span></p>
            <p className="content_para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="my_request_boxes">
            <div className="img_sec">
              <div className="img">
                <img src={require("../../assets/images/houseup_request_main.jpg")} alt="request_main" />
              </div>
              <div className="cont">
                <h3>Shirley Douglas</h3>
                <h3>Toronto <span className="status">Join Now</span></h3>
              </div>
              <div className="details_dot">
                <img src={require("../../assets/images/dots_details.png")} alt="dots_details" />
              </div>
              <div className="clear" />
            </div>
            <p className="span_meta">Call request timing <span className="time">21/06/2020</span> <span className="date">08:20</span></p>
            <p className="content_para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="clear" />
        </div>
        <div className="request_callback">
          <h2>Request Call Back</h2>
          <div className="my_request_boxes">
            <div className="img_sec">
              <div className="img">
                <img src={require("../../assets/images/houseup_request_main.jpg")} alt="request_main" />
              </div>
              <div className="cont">
                <h3>Shirley Douglas</h3>
                <h3>Toronto <span className="status">Join Now</span></h3>
              </div>
              <div className="details_contact">
                <ul>
                  <li><Link to="#"><img src={require("../../assets/images/phone_icon.jpg")} alt="details_contact" /></Link></li>
                  <li><Link to="#"><img src={require("../../assets/images/email_icon.jpg")} alt="details_contact" /></Link></li>
                </ul>
              </div>
              <div className="clear" />
            </div>
            <p className="span_meta">Call request timing <span className="time">21/06/2020</span> <span className="date">08:20</span></p>
            <p className="content_para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="my_request_boxes">
            <div className="img_sec">
              <div className="img">
                <img src={require("../../assets/images/houseup_request_main.jpg")} alt="request_main" />
              </div>
              <div className="cont">
                <h3>Shirley Douglas</h3>
                <h3>Toronto <span className="status">Join Now</span></h3>
              </div>
              <div className="details_contact">
                <ul>
                  <li><Link to="#"><img src={require("../../assets/images/phone_icon.jpg")} alt="details_contact" /></Link></li>
                  <li><Link to="#"><img src={require("../../assets/images/phone_icon.jpg")} alt="details_contact" /></Link></li>
                </ul>
              </div>
              <div className="clear" />
            </div>
            <p className="span_meta">Call request timing <span className="time">21/06/2020</span> <span className="date">08:20</span></p>
            <p className="content_para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="my_request_boxes">
            <div className="img_sec">
              <div className="img">
                <img src={require("../../assets/images/houseup_request_main.jpg")} alt="request_main" />
              </div>
              <div className="cont">
                <h3>Shirley Douglas</h3>
                <h3>Toronto <span className="status">Join Now</span></h3>
              </div>
              <div className="details_contact">
                <ul>
                  <li><Link to="#"><img src={require("../../assets/images/phone_icon.jpg")} alt="details_contact" /></Link></li>
                  <li><Link to="#"><img src={require("../../assets/images/email_icon.jpg")} alt="details_contact" /></Link></li>
                </ul>
              </div>	
              <div className="clear" />
            </div>
            <p className="span_meta">Call request timing <span className="time">21/06/2020</span> <span className="date">08:20</span></p>
            <p className="content_para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
        <div className="clear" />
      </div>
      
    )
}
