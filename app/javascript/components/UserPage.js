import React from 'react'
import Property from './Property'

const Booking = props => {
    return (
        <article className="mb1">
            <a href={`/properties/${props.property_id}`} className="link db ba b--light-silver pl2">
                <div className="flex items-center justify-end w-100">
                    <div className="mr1">{props.location}</div>
                    <div className="flex-auto">from {props.from} for {props.nights} nights.</div>
                    <div className="h2 w4 with-bg-image" style={{backgroundImage: `url(${props.image})`}}></div>
                </div>
            </a>
        </article>
    )
}

export default function (props) {
    return (
        <main>
            <h1>{props.user.name}</h1>
            <section className="pa4 w-100 card-list-section">
                {props.properties.map(property => <Property key={`property-${property.id}`} property={property} />)}
            </section>
            <section className="mh2 pa2 ba b--light-silver">
                <label>Add a property</label>
                <form action={`/users/${props.user.id}/properties`} method="POST" encType="multipart/form-data">
                    <input name="image" type="file" />
                    <input name="location" placeholder="location" />
                    <input name="price_per_night" type="number" placeholder="how much to charge each night?" />
                    <input name="authenticity_token" value={props.token} type="hidden"/>
                    <button>Add property</button>
                </form>
            </section>
            <section className="mb4 pa2">
                <h2>Bookings</h2>
                {props.bookings.length ? (
                    props.bookings.map(booking => <Booking key={`booking-${booking.id}`} {...booking} />)
                ) : <p>"You have no upcoming stays"</p>}
            </section>
        </main>
    )
}