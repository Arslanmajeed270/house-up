import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class comingSoon extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<div className='flex-w flex-str size1 overlay1'>
					<div className='flex-w flex-col-sb wsize1 bg0 p-l-70 p-t-37 p-b-52 p-r-50 respon1'>
						<div className='wrappic1'>
							<Link to=''>
								<img src='assets/images/icons/logo.png' alt='IMG' />
							</Link>
						</div>
						<div className='w-full p-t-100 p-b-90 p-l-48 p-l-0-md'>
							<h3 className='l1-txt1 p-b-34 respon3'>Coming Soon</h3>
							<p className='m2-txt1 p-b-46'>Follow us for update now!</p>
							<form className='contact100-form validate-form m-t-10 m-b-10'>
								<div
									className='wrap-input100 validate-input m-lr-auto-lg'
									data-validate='Email is required: ex@abc.xyz'
								>
									<input
										className='s2-txt1 placeholder0 input100 trans-04'
										type='text'
										name='email'
										placeholder='Email Address'
									/>
									<button className='flex-c-m ab-t-r size2 hov1 respon5'>
										<i className='zmdi zmdi-long-arrow-right fs-30 cl1 trans-04' />
									</button>
									<div className='flex-c-m ab-t-l s2-txt1 size4 bor1 respon4'>
										<span>Subcribe Now:</span>
									</div>
								</div>
							</form>
						</div>
						<div className='flex-w flex-m'>
							<span className='m2-txt2 p-r-40'>Follow us</span>
							<Link
								to='https://www.facebook.com/Houseup.ca'
								target='_blank'
								className='size3 flex-c-m how-social trans-04 m-r-15 m-b-5 m-t-5'
							>
								<i className='fa fa-facebook' />
							</Link>
							<Link
								to='https://www.instagram.com/houseup.ca/'
								target='_blank'
								className='size3 flex-c-m how-social trans-04 m-r-15 m-b-5 m-t-5'
							>
								<i className='fa fa-instagram' />
							</Link>
							<Link
								to='http://myxpapp.com/houseup.ca'
								target='_blank'
								className='size3 flex-c-m how-social trans-04 m-r-15 m-b-5 m-t-5'
							>
								<i className='fa fa-github' />
							</Link>
						</div>
					</div>
					<div
						className='wsize2 bg-img1 respon2'
						style={{ backgroundImage: 'url("assets/images/bg01.jpg")' }}
					></div>
				</div>
			</React.Fragment>
		);
	}
}

export default comingSoon;
