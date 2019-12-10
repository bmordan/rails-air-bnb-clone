import React from 'react'
import Property from './Property'

export default function (props) {
    return (
        <section className="pa4 w-100 card-list-section">
            {props.properties.map(property => <Property key={`property-${property.id}`} property={property} current_user={props.current_user} />)}
        </section>
    )
}