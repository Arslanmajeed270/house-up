import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class blogs extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<div className='pxp-content'>
					<div className='pxp-blog-posts pxp-content-wrapper mt-100'>
						<div className='container'>
							<h1 className='pxp-page-header'>Latest Articles</h1>
							<p className='pxp-text-light'>
								Read our latest articles on real estate, architecture, interior
								design, and more
							</p>
							<div className='pxp-blog-posts-carousel-1 mt-4 mt-md-5'>
								<div
									id='pxp-blog-posts-carousel-1-img'
									className='carousel slide pxp-blog-posts-carousel-1-img'
									data-ride='carousel'
									data-pause='false'
									data-interval='false'
								>
									<div className='carousel-inner'>
										<div className='carousel-item active' data-slide={0}>
											<div
												className='pxp-hero-bg pxp-cover'
												style={{
													backgroundImage:
														'url(assets/images/prop-7-2-big.jpg)',
													backgroundPosition: '50% 50%',
												}}
											/>
										</div>
										<div className='carousel-item' data-slide={1}>
											<div
												className='pxp-hero-bg pxp-cover'
												style={{
													backgroundImage:
														'url(assets/images/prop-3-1-big.jpg)',
													backgroundPosition: '50% 50%',
												}}
											/>
										</div>
										<div className='carousel-item' data-slide={2}>
											<div
												className='pxp-hero-bg pxp-cover'
												style={{
													backgroundImage:
														'url(assets/images/prop-3-3-big.jpg)',
													backgroundPosition: '50% 50%',
												}}
											/>
										</div>
										<div className='carousel-item' data-slide={3}>
											<div
												className='pxp-hero-bg pxp-cover'
												style={{
													backgroundImage:
														'url(assets/images/prop-1-1-big.jpg)',
													backgroundPosition: '50% 50%',
												}}
											/>
										</div>
									</div>
								</div>
								<div className='pxp-carousel-controls'>
									<Link
										to=''
										className='pxp-carousel-control-prev'
										role='button'
										data-slide='prev'
									>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='32.414'
											height='20.828'
											viewBox='0 0 32.414 20.828'
										>
											<g
												id='Group_30'
												data-name='Group 30'
												transform='translate(-1845.086 -1586.086)'
											>
												<line
													id='Line_2'
													data-name='Line 2'
													x1={30}
													transform='translate(1846.5 1596.5)'
													fill='none'
													stroke='#333'
													strokeLinecap='round'
													strokeWidth={2}
												/>
												<line
													id='Line_3'
													data-name='Line 3'
													x1={9}
													y2={9}
													transform='translate(1846.5 1587.5)'
													fill='none'
													stroke='#333'
													strokeLinecap='round'
													strokeWidth={2}
												/>
												<line
													id='Line_4'
													data-name='Line 4'
													x1={9}
													y1={9}
													transform='translate(1846.5 1596.5)'
													fill='none'
													stroke='#333'
													strokeLinecap='round'
													strokeWidth={2}
												/>
											</g>
										</svg>
									</Link>
									<Link
										to=''
										className='pxp-carousel-control-next'
										role='button'
										data-slide='next'
									>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='32.414'
											height='20.828'
											viewBox='0 0 32.414 20.828'
										>
											<g
												id='Symbol_1_1'
												data-name='Symbol 1 – 1'
												transform='translate(-1847.5 -1589.086)'
											>
												<line
													id='Line_5'
													data-name='Line 2'
													x2={30}
													transform='translate(1848.5 1599.5)'
													fill='none'
													stroke='#333'
													strokeLinecap='round'
													strokeWidth={2}
												/>
												<line
													id='Line_6'
													data-name='Line 3'
													x2={9}
													y2={9}
													transform='translate(1869.5 1590.5)'
													fill='none'
													stroke='#333'
													strokeLinecap='round'
													strokeWidth={2}
												/>
												<line
													id='Line_7'
													data-name='Line 4'
													y1={9}
													x2={9}
													transform='translate(1869.5 1599.5)'
													fill='none'
													stroke='#333'
													strokeLinecap='round'
													strokeWidth={2}
												/>
											</g>
										</svg>
									</Link>
								</div>
								<div className='pxp-blog-posts-carousel-1-caption-container'>
									<div
										id='pxp-blog-posts-carousel-1-caption'
										className='carousel slide pxp-blog-posts-carousel-1-caption'
										data-ride='carousel'
										data-pause='false'
										data-interval='false'
									>
										<div className='carousel-inner'>
											<div className='carousel-item active' data-slide={0}>
												<div className='pxp-blog-posts-carousel-1-caption-category'>
													Architecture
												</div>
												<div className='pxp-blog-posts-carousel-1-caption-title'>
													What to Expect When Working with an Interior Designer
												</div>
												<div className='pxp-blog-posts-carousel-1-caption-summary'>
													It is a long established fact that a reader will be
													distracted by the readable content of a page when
													looking at its layout...
												</div>
												<Link
													to='/single-post'
													className='pxp-primary-cta text-uppercase mt-3 mt-md-4 pxp-animate'
												>
													Read Article
												</Link>
											</div>
											<div className='carousel-item' data-slide={1}>
												<div className='pxp-blog-posts-carousel-1-caption-category'>
													Interior Design
												</div>
												<div className='pxp-blog-posts-carousel-1-caption-title'>
													Private Contemporary Home Balancing Openness
												</div>
												<div className='pxp-blog-posts-carousel-1-caption-summary'>
													The point of using Lorem Ipsum is that it has a
													more-or-less normal distribution of letters as opposed
													to using...
												</div>
												<Link
													to='/single-post'
													className='pxp-primary-cta text-uppercase mt-3 mt-md-4 pxp-animate'
												>
													Read Article
												</Link>
											</div>
											<div className='carousel-item' data-slide={2}>
												<div className='pxp-blog-posts-carousel-1-caption-category'>
													Architecture
												</div>
												<div className='pxp-blog-posts-carousel-1-caption-title'>
													How Does A Designer Apartment Look Like
												</div>
												<div className='pxp-blog-posts-carousel-1-caption-summary'>
													Many desktop publishing packages and web page editors
													now use Lorem Ipsum as their default model text, and a
													search...
												</div>
												<Link
													to='/single-post'
													className='pxp-primary-cta text-uppercase mt-3 mt-md-4 pxp-animate'
												>
													Read Article
												</Link>
											</div>
											<div className='carousel-item' data-slide={3}>
												<div className='pxp-blog-posts-carousel-1-caption-category'>
													Interior Design
												</div>
												<div className='pxp-blog-posts-carousel-1-caption-title'>
													Luminous Apartment Flaunting Modern Style
												</div>
												<div className='pxp-blog-posts-carousel-1-caption-summary'>
													There are many variations of passages of Lorem Ipsum
													available, but the majority have suffered alteration
													in some form...
												</div>
												<Link
													to='/single-post'
													className='pxp-primary-cta text-uppercase mt-3 mt-md-4 pxp-animate'
												>
													Read Article
												</Link>
											</div>
										</div>
									</div>
								</div>
								<div className='pxp-blog-posts-carousel-1-badge'>Featured</div>
							</div>
							<div className='row mt-200'>
								<div className='col-sm-12 col-lg-9'>
									<div className='row'>
										<div className='col-sm-12 col-md-6'>
											<Link to='/single-post' className='pxp-posts-1-item'>
												<div className='pxp-posts-1-item-fig-container'>
													<div
														className='pxp-posts-1-item-fig pxp-cover'
														style={{
															backgroundImage: 'url(assets/images/post-1.jpg)',
														}}
													/>
												</div>
												<div className='pxp-posts-1-item-details'>
													<div className='pxp-posts-1-item-details-category'>
														Interior Design
													</div>
													<div className='pxp-posts-1-item-details-title'>
														What to Expect When Working with an Interior
														Designer
													</div>
													<div className='pxp-posts-1-item-details-date mt-2'>
														April 9, 2019
													</div>
													<div className='pxp-posts-1-item-cta text-uppercase'>
														Read Article
													</div>
												</div>
											</Link>
										</div>
										<div className='col-sm-12 col-md-6'>
											<Link to='/single-post' className='pxp-posts-1-item'>
												<div className='pxp-posts-1-item-fig-container'>
													<div
														className='pxp-posts-1-item-fig pxp-cover'
														style={{
															backgroundImage: 'url(assets/images/post-2.jpg)',
														}}
													/>
												</div>
												<div className='pxp-posts-1-item-details'>
													<div className='pxp-posts-1-item-details-category'>
														Architecture
													</div>
													<div className='pxp-posts-1-item-details-title'>
														Private Contemporary Home Balancing Openness
													</div>
													<div className='pxp-posts-1-item-details-date mt-2'>
														April 9, 2019
													</div>
													<div className='pxp-posts-1-item-cta text-uppercase'>
														Read Article
													</div>
												</div>
											</Link>
										</div>
										<div className='col-sm-12 col-md-6'>
											<Link to='/single-post' className='pxp-posts-1-item'>
												<div className='pxp-posts-1-item-fig-container'>
													<div
														className='pxp-posts-1-item-fig pxp-cover'
														style={{
															backgroundImage: 'url(assets/images/post-3.jpg)',
														}}
													/>
												</div>
												<div className='pxp-posts-1-item-details'>
													<div className='pxp-posts-1-item-details-category'>
														Interior Design
													</div>
													<div className='pxp-posts-1-item-details-title'>
														Stylish Modern Ranch Exuding a Welcoming Feel
													</div>
													<div className='pxp-posts-1-item-details-date mt-2'>
														April 9, 2019
													</div>
													<div className='pxp-posts-1-item-cta text-uppercase'>
														Read Article
													</div>
												</div>
											</Link>
										</div>
										<div className='col-sm-12 col-md-6'>
											<Link to='/single-post' className='pxp-posts-1-item'>
												<div className='pxp-posts-1-item-fig-container'>
													<div
														className='pxp-posts-1-item-fig pxp-cover'
														style={{
															backgroundImage: 'url(assets/images/post-4.jpg)',
														}}
													/>
												</div>
												<div className='pxp-posts-1-item-details'>
													<div className='pxp-posts-1-item-details-category'>
														Interior Design
													</div>
													<div className='pxp-posts-1-item-details-title'>
														What to Expect When Working with an Interior
														Designer
													</div>
													<div className='pxp-posts-1-item-details-date mt-2'>
														April 9, 2019
													</div>
													<div className='pxp-posts-1-item-cta text-uppercase'>
														Read Article
													</div>
												</div>
											</Link>
										</div>
										<div className='col-sm-12 col-md-6'>
											<Link to='/single-post' className='pxp-posts-1-item'>
												<div className='pxp-posts-1-item-fig-container'>
													<div
														className='pxp-posts-1-item-fig pxp-cover'
														style={{
															backgroundImage: 'url(assets/images/post-5.jpg)',
														}}
													/>
												</div>
												<div className='pxp-posts-1-item-details'>
													<div className='pxp-posts-1-item-details-category'>
														Architecture
													</div>
													<div className='pxp-posts-1-item-details-title'>
														Private Contemporary Home Balancing Openness
													</div>
													<div className='pxp-posts-1-item-details-date mt-2'>
														April 9, 2019
													</div>
													<div className='pxp-posts-1-item-cta text-uppercase'>
														Read Article
													</div>
												</div>
											</Link>
										</div>
										<div className='col-sm-12 col-md-6'>
											<Link to='/single-post' className='pxp-posts-1-item'>
												<div className='pxp-posts-1-item-fig-container'>
													<div
														className='pxp-posts-1-item-fig pxp-cover'
														style={{
															backgroundImage: 'url(assets/images/post-6.jpg)',
														}}
													/>
												</div>
												<div className='pxp-posts-1-item-details'>
													<div className='pxp-posts-1-item-details-category'>
														Interior Design
													</div>
													<div className='pxp-posts-1-item-details-title'>
														Stylish Modern Ranch Exuding a Welcoming Feel
													</div>
													<div className='pxp-posts-1-item-details-date mt-2'>
														April 9, 2019
													</div>
													<div className='pxp-posts-1-item-cta text-uppercase'>
														Read Article
													</div>
												</div>
											</Link>
										</div>
									</div>
									<ul className='pagination pxp-paginantion mt-3 mt-md-4'>
										<li className='page-item active'>
											<Link className='page-link' to=''>
												1
											</Link>
										</li>
										<li className='page-item'>
											<Link className='page-link' to=''>
												2
											</Link>
										</li>
										<li className='page-item'>
											<Link className='page-link' to=''>
												3
											</Link>
										</li>
										<li className='page-item'>
											<Link className='page-link' to=''>
												Next <span className='fa fa-angle-right' />
											</Link>
										</li>
									</ul>
								</div>
								<div className='col-sm-12 col-lg-3 mt-4 mt-md-5 mt-lg-0'>
									<div className='pxp-blog-posts-side-section'>
										<h3>Search Articles</h3>
										<div className='mt-3 mt-md-4'>
											<div className='form-group'>
												<input
													type='text'
													className='form-control pxp-is-address'
													placeholder='Search'
												/>
												<span className='fa fa-search' />
											</div>
										</div>
									</div>
									<div className='pxp-blog-posts-side-section mt-4 mt-md-5'>
										<h3>Categories</h3>
										<ul className='pxp-blog-posts-side-v-list list-unstyled mt-3 mt-md-4'>
											<li>
												<Link to=''>Fashion (3)</Link>
											</li>
											<li>
												<Link to=''>Lifestyle (2)</Link>
											</li>
											<li>
												<Link to=''>Personal (2)</Link>
											</li>
											<li>
												<Link to=''>Stories (2)</Link>
											</li>
											<li>
												<Link to=''>Travel (4)</Link>
											</li>
										</ul>
									</div>
									<div className='pxp-blog-posts-side-section mt-4 mt-md-5'>
										<h3>Tags</h3>
										<div className='pxp-blog-posts-side-tags mt-3 mt-md-4'>
											<Link to=''>Premium (10)</Link>
											<Link to=''>Interior (12)</Link>
											<Link to=''>Stories (6)</Link>
											<Link to=''>Fashion (2)</Link>
											<Link to=''>Architecture (8)</Link>
											<Link to=''>Lifestyle (5)</Link>
											<Link to=''>Travel (10)</Link>
											<Link to=''>Personal (11)</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default blogs;
