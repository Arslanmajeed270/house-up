import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const carouselItemMapper = (appFeatures) => {
    const carouselItems = [];
    if (
        appFeatures &&
        appFeatures.length
    ) {
        appFeatures.map( data => (
            carouselItems.push(
                <img
                class="sliderGif"
                src={data.featureImageURL} 
                alt={data.featureText}
                />
            )
        ));
    return carouselItems;
}
}

const responsive = {
	0: { items: 1 },
	568: { items: 1 },
	1024: { items: 1 },
};

export default function HeaderCarousel({ appFeatures }) {
    const carouselItems = carouselItemMapper(appFeatures)
    return (
        <div class="sliderImage" style={{position: "relative", top: "60px"}}>
            <AliceCarousel
                mouseTracking={false}
                autoPlay
                autoPlayInterval={5000}
                responsive={responsive}
                items={carouselItems}
                disableDotsControls={true}
                disableButtonsControls={true}
                infinite={true}
                animationDuration={1000}
            />
        </div>
    )
}
