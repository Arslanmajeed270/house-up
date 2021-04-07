import React, { Component } from 'react'
import PropertyDetail from './components/propertyDetail';

import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

class SingleProperty extends Component {

    constructor(props) {
		super(props);
		this.state = {
			singlePropertyData: {},
			id: '',
		};
	}

	static getDerivedStateFromProps(props, state) {
		const { property } = props;

		let stateChanged = false;
		let changedState = {};

		if (
			property &&
			JSON.stringify(state.singlePropertyData) !==
				JSON.stringify(property.singlePropertyData)
		) {
			changedState.singlePropertyData = property.singlePropertyData;
			stateChanged = true;
		}

		if (stateChanged) {
			return changedState;
		}
		return null;
	}

	componentDidMount() {
		const id = this.props.match.params.id;

		this.setState({
			id,
			
		});

		const userData = {
			propertyId: id,
		};
		this.props.onGetSinglePropertyData(userData);
	}

    render() {
        const { singlePropertyData } = this.state;
        console.log('checking this.state: ', this.state);
        return (
        <div className="page-holder w-100 d-flex flex-wrap">
            <div className="container-fluid px-xl-5">
                <section className="py-5">
                    <PropertyDetail propertyDetail={singlePropertyData} />
                </section>
            </div>
        </div>
        )
    }
}
const mapStateToProps = (state) => {
	return {
		property: state.property,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
        onGetSinglePropertyData: (userData) =>
			dispatch(actions.getSingleProperty(userData)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleProperty);