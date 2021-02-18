import React, { Component } from 'react'
import VendorDetails from './components/vendorDetails';
import VendorProperties from './components/vendorProperties';
import VendorStories from './components/vendorStories';
import VendorPosts from './components/vendorPosts';

class SingleVendor extends Component {
    render() {
        return (
        <div className="page-holder w-100 d-flex flex-wrap">
            <div className="container-fluid px-xl-5">
                <section className="py-5">
                    <VendorDetails />
                    <VendorProperties />
                    <VendorStories />
                    <VendorPosts />
                </section>
            </div>
        </div>
        )
    }
}

export default SingleVendor;