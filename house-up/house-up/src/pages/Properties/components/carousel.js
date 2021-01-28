import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const carouselItemMapper = (singlePropertyData) => {
    const carouselItems = [];
    if (
        singlePropertyData &&
        singlePropertyData.imageList &&
        singlePropertyData.imageList.length
    ) {
        for (let i = 0; i < 5; i++) {
                const item = ( <img
                    alt=""
                    width='322.5' 
                    height="323" 
                    style={{
                        paddingTop: "2px", 
                        paddingRight: "2px"
                    }} 
                    src={singlePropertyData.imageList[i] && singlePropertyData.imageList[i].imageURL} />);
                carouselItems.push(item);
            }
        }
    return carouselItems;
}

const responsive = {
	0: { items: 1.2 }
};

export default function carousel({singlePropertyData}) {
    const carouselItems = carouselItemMapper(singlePropertyData)
    return (
        <AliceCarousel
            mouseTracking
            responsive={responsive}
            items={carouselItems}
            disableDotsControls={true}
        />
    )
}
