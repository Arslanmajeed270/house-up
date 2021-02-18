import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

import Spinner from '../../components/common/Spinner';
import ProfessionalRender from './components/professionalRender'
import Carousel from './components/carousel'
import NeighborhoodRender from './components/neighborhoodRender';
import HeaderCarousel from './components/headerCarousel';

class home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			errors: {},
			homePageData: {},
			user: {},
			appFeatures: []
		};
	}
	static getDerivedStateFromProps(props, state) {
		const {page, errors, auth } = props;
		let stateChanged = false;
		let changedState = {};

		if (auth && auth.user && JSON.stringify(state.user) !== JSON.stringify(auth.user)) 
		{
			changedState.user = auth.user;
			stateChanged = true;
		}

		if ( page && 
			JSON.stringify(state.homePageData) !== JSON.stringify(page.homePageData)
			) {
			changedState.homePageData = page.homePageData;
			stateChanged = true;
		}

		if ( page && 
			JSON.stringify(state.appFeatures) !== JSON.stringify(page.appFeatures)
			) {
			changedState.appFeatures = page.appFeatures;
			stateChanged = true;
		}

		if ( page && JSON.stringify(state.loading) !== JSON.stringify(page.loading) ) {
			changedState.loading = page.loading;
			stateChanged = true;
		}
		if (errors && JSON.stringify(state.errors) !== JSON.stringify(errors)) {
			changedState.errors = errors;
			stateChanged = true;
		  }

		if (stateChanged) return changedState;
		return null;
	}

	componentDidMount() {
		const {onGetAppFeatures, onGetHomePageData  } = this.props;
		const { homePageData, appFeatures } = this.state;

		if (!homePageData || !homePageData.properties)
			onGetHomePageData();
		if ( !appFeatures || !appFeatures.length)
			onGetAppFeatures();
	}

	render() {
		
		const { homePageData, loading, appFeatures } = this.state;
		let pageContent = '';
		if (loading && !homePageData.properties)
			pageContent = <Spinner />;
		else {
			pageContent = (<React.Fragment>
				<div className='pxp-content'>

					<HeaderCarousel appFeatures={appFeatures} />
					
					<div className='mt-60 container'>
						<h2 className='pxp-section-h2'>Featured Properties</h2>
						<p className='pxp-text-light'>Browse the latest listings</p>
						<div className='container-fluid pxp-props-carousel-right mt-60'>
							<div className='pxp-props-carousel-right-container mt-4 mt-md-5'>
								<Carousel 
								homePageData={homePageData} 
								history={this.props.history} 
								/>
								<Link
										to='/properties'
										className='pxp-primary-cta text-uppercase mt-4 mt-md-5 pxp-animate'
									>
										Browse All
									</Link>
							</div>
						</div>
					</div>
					<div
						className='pxp-services pxp-cover mt-60 pt-100 mb-200'
						style={{ backgroundImage: 'url(assets/images/services-h-fig.jpg)' }}
					>
						<h2 className='text-center pxp-section'>Why Choose Us</h2>
						<p className='pxp-text-light text-center'>
							Take control of the most important decision of your life
						</p>
						<div className='container'>
							<div className='pxp-services-container rounded-lg mt-4 mt-md-5'>
								<Link
									onClick={(e) => {
										e.preventDefault();
										this.props.modelHanlder('phoneSignin');
									}}
									to='/add-property'
									className='pxp-services-item'
								>
									<div className='pxp-services-item-fig'>
										<img src='assets/images/service-icon-1.svg' alt='...' />
									</div>
									<div className='pxp-services-item-text text-center'>
										<div className='pxp-services-item-text-title'>
											List Your Home
										</div>
										<div className='pxp-services-item-text-sub'>
											Sell or rent your property <br />
											without paying realtor fees
										</div>
									</div>
								</Link>
								<Link
									onClick={(e) => {
										e.preventDefault();
										this.props.modelHanlder('phoneNumberVendorModel');
									}}
									to='#'
									className='pxp-services-item'
								>
									<div>
										<div className='pxp-services-item-fig'>
											<img src='assets/images/service-icon-2.svg' alt='...' />
										</div>
										<div className='pxp-services-item-text text-center'>
											<div className='pxp-services-item-text-title'>
												Become a Professional
											</div>
											<div className='pxp-services-item-text-sub'>
												Register Your Local Business. <br />
												HouseUp reviews all business <br />
												before approval.
											</div>
										</div>
									</div>
								</Link>
								<Link to='/professionals' className='pxp-services-item'>
									<div className='pxp-services-item-fig'>
										<img src='assets/images/service-icon-3.svg' alt='...' />
									</div>
									<div className='pxp-services-item-text text-center'>
										<div className='pxp-services-item-text-title'>
											Get Help From The Pros
										</div>
										<div className='pxp-services-item-text-sub'>
											Find a professional to help <br /> you sell your home
										</div>
									</div>
									{/* <div className="pxp-services-item-cta text-uppercase text-center">Learn More</div> */}
								</Link>
								<Link to='/blogs' className='pxp-services-item'>
									<div className='pxp-services-item-fig'>
										<img src='assets/images/service-icon-4.svg' alt='...' />
									</div>
									<div className='pxp-services-item-text text-center'>
										<div className='pxp-services-item-text-title'>
											Resources
										</div>
										<div className='pxp-services-item-text-sub'>
											Read our latest articles on real estate,
											<br />
											architecture, interior design and more{' '}
										</div>
									</div>
								</Link>
								<div className='clearfix' />
							</div>
						</div>
					</div>
					<div className='container mt-100'>
						<h2 className='pxp-section'>Explore Your Neighborhoods</h2>
						<p className='pxp-text-light'>
							Browse listings curated by neighborhoods
						</p>
						<NeighborhoodRender homePageData={homePageData} />
						<Link
							to='/properties'
							className='pxp-primary-cta text-uppercase mt-2 mt-md-4 pxp-animate'
						>
							EXPLORE NEIGHBORHOODS
						</Link>
					</div>
					<div
						className='pxp-cta-1 pxp-cover mt-100 pt-300'
						style={{
							backgroundImage: 'url(assets/images/cta-fig-1.jpg)',
							backgroundPosition: '50% 50%',
						}}
					>
						<div className='container'>
							<div className='row'>
								<div className='col-sm-12 col-md-6 col-lg-4'>
									<div className='pxp-cta-1-caption pxp-animate-in rounded-lg'>
										<h2 className='pxp-section-h2'>
											Search Smarter, From Anywhere
										</h2>
										<p className='pxp-text-light'>
											Power your search with our House Up real estate platform,
											for timely listings and a seamless experience
										</p>
										<Link
											to='/properties'
											className='pxp-primary-cta text-uppercase mt-3 mt-md-5 pxp-animate'
										>
											Search Now
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='container mt-100'>
						<h2 className='pxp-section'>Find a Professional</h2>
						<p className='pxp-text-light'>
							Search for qualified professionals in your area
						</p>
						<div className='row mt-4 mt-md-5'>
							<ProfessionalRender homePageData={homePageData} />
							<div className='col-lg-12'>
								<Link
									to='/professionals'
									className='pxp-primary-cta text-uppercase mt-1 mt-md-4 pxp-animate'
								>
									See All Professionals
								</Link>
							</div>
						</div>
					</div>
					<div className='container mt-60'>
						<h2 className='pxp-section-h2 text-center'>Membership Plans</h2>
						<p className='pxp-text-light text-center'>
							Choose the plan that suits you best
						</p>
						<div className='row mt-5'>
							<div className='col-sm-12 col-md-6 col-lg-6'>
								<Link to='#' className='pxp-plans-1-item '>
									<div className='pxp-plans-1-item-fig'>
										<img
											src={require('../../assets/images/ic_monthly_plan.svg')}
											alt='...'
										/>
									</div>
									<div className='pxp-plans-1-item-title'>Monthly</div>
									<ul className='pxp-plans-1-item-features list-unstyled'></ul>
									<div className='pxp-plans-1-item-price'>
										<span className='pxp-plans-1-item-price-currency'>$</span>
										<span className='pxp-plans-1-item-price-sum'>29.99</span>
										<span className='pxp-plans-1-item-price-period'>
											{' '}
											/ month
										</span>
									</div>
									<div className='pxp-plans-1-item-cta text-uppercase'>
										Choose Plan
									</div>
								</Link>
							</div>
							<div className='col-sm-12 col-md-6 col-lg-6'>
								<Link to='#' className='pxp-plans-1-item pxp-is-popular'>
									<div className='pxp-plans-1-item-label'>Most Popular</div>
									<div className='pxp-plans-1-item-fig'>
										<img
											src={require('../../assets/images/ic_annually_plan.svg')}
											alt='...'
										/>
									</div>
									<div className='pxp-plans-1-item-title'>Annually</div>
									<ul className='pxp-plans-1-item-features list-unstyled'></ul>
									<div className='pxp-plans-1-item-price'>
										<span className='pxp-plans-1-item-price-currency'>$</span>
										<span className='pxp-plans-1-item-price-sum'>299.99</span>
										<span className='pxp-plans-1-item-price-period'>
											{' '}
											/ year
										</span>
									</div>
									<div className='pxp-plans-1-item-cta text-uppercase'>
										Choose Plan
									</div>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
		}		
		return pageContent;
	}
}

const mapStateToProps = (state) => {
	return {
		page: state.page,
		auth: state.auth,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onGetHomePageData: () => dispatch(actions.getHomePageData()),
		onGetAppFeatures: () => dispatch(actions.getAppFeatures()),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(home);
