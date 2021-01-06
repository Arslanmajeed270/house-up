import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const carouselItemMapper = (homePageData, history) => {
    const carouselItems = [];
    console.log('checking history: ', history);
    if (
        homePageData &&
        homePageData.properties &&
        homePageData.properties.length
    ) {
        for (let i = 0; i < homePageData.properties.length; i++) {
            if (
                homePageData &&
                homePageData.properties[i].propertyStatusDesc === 'Approved'
            ) {

                const item = (
                    <div className="item">
                        <div
                            className='pxp-prop-card-1 rounded-lg'
                        >
                            <div
                                className='pxp-prop-card-1-fig pxp-cover'
                                style={{
                                    backgroundImage: `url(${
                                        homePageData.properties[i] &&
                                        homePageData.properties[i].imageList &&
                                        homePageData.properties[i].imageList[0] &&
                                        homePageData.properties[i].imageList[0].imageURL
                                            ? homePageData.properties[i].imageList[0].imageURL
                                            : require('../../../assets/images/dashboard/ottawa.png')
                                    })`,
                                }}
                            />
                            <div className='pxp-prop-card-1-gradient pxp-animate' />
                            <div
                            style={{cursor: 'pointer'}}
                            onClick={() => history.push(`/single-prop-${homePageData.properties[i].propertId}`)}
                            className='pxp-prop-card-1-details'>
                                <div className='pxp-prop-card-1-details-titles'>
                                    {homePageData.properties[i].adTitle}
                                </div>
                                <div className='pxp-prop-card-1-details-price'>
                                    {homePageData.properties[i].currency.symbol}
                                    {homePageData.properties[i].price.toLocaleString()}
                                </div>
                                <div className='pxp-prop-card-1-details-features text-uppercase'>
                                    {homePageData.properties[i].noOfBedrooms} BD <span>|</span>{' '}
                                    {homePageData.properties[i].noOfBathrooms} BA <span>|</span>{' '}
                                    {homePageData.properties[i].finishedSqftArea} SF
                                </div>
                            </div>
                            <div className='pxp-prop-card-1-details-cta text-uppercase'>
                                View Details
                            </div>
                        </div>
                    </div>
                );
                carouselItems.push(item);
            }
        }
    }
    return carouselItems;
}

const responsive = {
	0: { items: 1 },
	568: { items: 2 },
	1024: { items: 4.7 },
};

export default function carousel({homePageData, history}) {
    console.log('checking history into function: ', history);
    const carouselItems = carouselItemMapper(homePageData, history)
    return (
    <div className='owl-carousel pxp-props-carousel-right-stage'>
        <AliceCarousel
            mouseTracking
            responsive={responsive}
            items={carouselItems}
            disableDotsControls={true}
        />
    </div>
    )
}
