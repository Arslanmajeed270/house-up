import React from 'react';

export const limitWordHandler = (str) => {
    const arrayString = str.split(' ');
    let paragraph = '';
    const limit = arrayString.length < 3 ? arrayString.length : 3;
    for (let i = 0; i < limit; i++) {
        paragraph += arrayString[i] + ' ';
    }
    if (arrayString.length >= 3) {
        paragraph += '...';
    }
    return paragraph;
};

export const dateHandler = (date) => {
    const months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
    return <strong className="h5 mb-0">{date.split('-')[2]}<sup className="smaller text-gray font-weight-normal">{months[date.split('-')[1]-1]}</sup></strong>;
}