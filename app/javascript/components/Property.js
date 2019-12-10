import React from 'react'

export default function (props) {
    const {id, location, price_per_night, image} = props.property
    return (
        <a href={`/properties/${id}`} className="card-list-item with-bg-image link dib ba br2 b--light-silver flex flex-column justify-end" style={{backgroundImage: `url(${image})`}}>
            <section className="bg-near-white link pa2">
                <div>{location}</div>
                <div>£{price_per_night} <small>a night</small></div>
            </section>
        </a>
    )
}