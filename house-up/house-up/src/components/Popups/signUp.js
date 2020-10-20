// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { Modal } from 'react-bootstrap';


// class signUpPopup extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             firstName:'',
//             lastName : '',
//             email: '',
//             password: '',
//         };
//     }
//     onChange = e => {
//         this.setState({
//           [e.target.name]: e.target.value
//         });
//       }
//       onSubmit = e => {
//         console.log('checking click handler');
      
//              e.preventDefault();
      
//              const userData = {
//                   emailAddress: this.state.email,
//                   password: this.state.password,
//                   channel: "HouseUp"
//              };
      
//              this.props.onLogin(userData, this.props.history);
//          }
//           state = {  }



//     render() {

//         return (

//                 <Modal 
//                     show={true}
//                     aria-labelledby="contained-modal-title-vcenter"
//                     centered
//                     ClassName="signUp-modal"
//                     >
//                     <Modal.Header onClick={this.props.signupPopupHanlder} >
//                     </Modal.Header>
//                     <Modal.Body >
//                     <Link>
//                     <div className="signupCards">
//                         <div className="dashboard-newsfeed-content">
//                             <Link to="#">
//                                 <img  className="vendor-img" src="assets/images/vendor.png" alt=""  />
//                                 <div class="text-center">Users</div>
//                                 <div class="text-center">jdsfhsdkf kdrj d kdf riodk fikd huif</div>                              
//                             </Link>
//                         </div>
//                     </div>
//                     </Link>
//                     <Link>
//                     <div className="signupCards">
//                         <div className="dashboard-newsfeed-content">
//                             <Link to="#">
//                                 <img className="vendor-img" src="assets/images/vendor.png" alt="" />
//                                 <div class="text-center ">Users</div>
//                                 <div class="text-center ">jdsfhsdkf kdrj d kdf riodk fikd huif</div>
//                             </Link>
//                         </div>
//                     </div>
//                     </Link>
//                      </Modal.Body>
//                 </Modal>  
//         )
//     }
// }
// export default signUpPopup;