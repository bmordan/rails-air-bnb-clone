import React from 'react'
import Review from './Review'

export default function (props) {
    return (
        <main>
            <section className="bb b--light-silver">
                <img src={props.image} />
                <h2 className="ph4 pv2">{props.property.location} £{props.property.price_per_night} <small>a night</small></h2>
            </section>
            <section className="ph4 pv2 bb b--light-silver">
                {props.user ? (
                    <form 
                    action={`/users/${props.user.id}/properties/${props.property.id}/bookings`} 
                    method="POST"
                    className="pa2 tc">
                        <h3>Book your stay</h3>
                        <input name="authenticity_token" value={props.token} type="hidden" />
                        <input name="user_id" value={props.user.id} type="hidden" />
                        <div>
                            <label>For&nbsp;</label>
                            <input className="pa2" name="nights" type="number" min="1" max="7" placeholder="?" />
                            <label>&nbsp;nights&nbsp;from</label>
                            <input className="pa2" name="from" type="date" min={new Date().toISOString().substring(0,10)} />
                        </div>
                        <button className="pa2 bg-green white b--transparent br2 mt2">Book</button>
                    </form>
                ) : (
                    <a href="/login">login to book your stay</a>
                )}
            </section>
            <section className="mv4 ph4">
                {props.reviews.map(review => <Review key={`review-${review.id}`} {...review} />)}
            </section>
        </main>
    )
}