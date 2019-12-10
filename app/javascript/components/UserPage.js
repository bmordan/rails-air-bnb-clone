import React from 'react'
import Property from './Property'
import Review from './Review'

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
    console.log(props.reviews)
    return (
        <main>
            <section className="ph4 pv2">
                <h1>{props.user.name}</h1>
            </section>
            <section className="ph4 pv2 w-100 card-list-section">
                {props.properties.map(property => <Property key={`property-${property.id}`} property={property} />)}
                {props.current_user ? (
                    <div className="card-list-item ba b--dashed b--light-silver flex flex-column justify-center pl4 br2">
                        <form action={`/users/${props.user.id}/properties`} method="POST" encType="multipart/form-data">
                            <input className="db mb2" name="image" type="file" />
                            <input className="db mb2" name="location" placeholder="location" />
                            <input className="db mb2" name="price_per_night" type="number" placeholder="how much to charge each night?" />
                            <input name="authenticity_token" value={props.token} type="hidden"/>
                            <button>Add property</button>
                        </form>
                    </div>
                ) : null}
            </section>
            {props.current_user ? (
                <section className="mv2 ph4">
                    <h2>Bookings</h2>
                    {props.bookings.length ? (
                        props.bookings.map(booking => <Booking key={`booking-${booking.id}`} {...booking} />)
                    ) : <p>"You have no upcoming stays"</p>}
                </section>
            ) : null}
            <section className="mt2 mb4 ph4">
                {props.reviews.map(review => <Review key={`review-${review.id}`} {...review} />)}
            </section>
        </main>
    )
}