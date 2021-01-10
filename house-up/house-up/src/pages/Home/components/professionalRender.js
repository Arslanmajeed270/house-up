import React from 'react'
import {Link} from 'react-router-dom'

export default function professionalRender({homePageData}) {
    return(
        <React.Fragment>
        {
        homePageData && homePageData.vendors ?
            homePageData.vendors.map((data, index) => (
                ( (data && data.userStatusDesc === 'Active') ||
                    (data.userStatusDesc === 'Approved' && professionalRender.length < 4) ) &&
                        <div key={index} className='col-sm-12 col-md-6 col-lg-3'>
                            <Link
                                to={`/single-vendor-${data && data.userId && data.userId}`}
                                className='pxp-agents-1-item'
                            >
                                <div className='pxp-agents-1-item-fig-container rounded-lg'>
                                    <div
                                        className='pxp-agents-1-item-fig pxp-cover'
                                        style={{
                                            backgroundImage: `url(${
                                                data.profilePictureUrl
                                                    ? data.profilePictureUrl
                                                    : 'assets/images/agent-2.jpg'
                                            })`,
                                        }}
                                    />
                                </div>
                                <div className='pxp-agents-1-item-details rounded-lg'>
                                    <div className='pxp-agents-1-item-details-name'>
                                        {data.firstName} {data.lastName}
                                    </div>
                                    <div className='pxp-agents-1-item-details-email'>
                                        {' '}
                                        {data.professionDesc}
                                    </div>
                                    <div className='pxp-agents-1-item-details-spacer' />
                                    <div className='pxp-agents-1-item-cta text-uppercase'>
                                        More Details
                                    </div>
                                </div>
                            </Link>
                        </div>
            ))
                : ""}
    </React.Fragment>
    )
}
