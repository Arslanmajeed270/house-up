import React from 'react'
import { Link } from 'react-router-dom'

export default function neighborhoodRender({homePageData}) {
    return (
        <div className='row mt-4 mt-md-5'>
        {homePageData &&
            homePageData.propertyCounts &&
            homePageData.propertyCounts.length &&
            homePageData.propertyCounts.map(
                (data, index) =>
                    index < 6 && (
                        <div key={index} className='col-sm-12 col-md-6 col-lg-4'>
                            <Link
                                to='/properties'
                                className='pxp-areas-1-item rounded-lg'
                            >
                                <div
                                    className='pxp-areas-1-item-fig pxp-cover'
                                    style={{
                                        backgroundImage: `url(${
                                            data &&
                                            data.properties &&
                                            data.properties[0].imageList &&
                                            data.properties[0].imageList[0].imageURL
                                                ? data.properties[0].imageList[0].imageURL
                                                : 'assets/images/area-2.jpg'
                                        })`,
                                    }}
                                />
                                <div className='pxp-areas-1-item-details'>
                                    <div className='pxp-areas-1-item-details-area'>
                                        {data && data.cityName}
                                    </div>
                                    <div className='pxp-areas-1-item-details-area'>
                                        <span>
                                            {data && data.propertyCount} Properties
                                        </span>
                                    </div>
                                    <div className='pxp-areas-1-item-details-city'></div>
                                </div>
                                <div className='pxp-areas-1-item-cta text-uppercase'>
                                    Explore
                                </div>
                            </Link>
                        </div>
                    )
            )}
    </div>
    )
}
