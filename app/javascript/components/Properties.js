import React from 'react'
import Property from './Property'

export default function (props) {
    return (
        <section className="pa4 w-100 card-list-section">
            {props.properties.map(property => <Property property={property} />)}
        </section>
    )
}