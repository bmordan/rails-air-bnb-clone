import React from 'react'

export default function (props) {
    return (
        <main>
            <img src={props.image} width="4rem" />
            <h2>{props.property.location}</h2>
            <hr />
            <h3>Book your stay</h3>
            {props.user ? (
                <form action={`/users/${props.user.id}/properties/${props.property.id}/bookings`} method="POST">
                    <input name="authenticity_token" value={props.token} type="hidden" />
                    <input name="user_id" value={props.user.id} type="hidden" />
                    <div>
                        <label>From</label>
                        <input className="b--light-silver" name="from" type="date" min={new Date().toISOString().substring(0,10)} />
                        <label>For</label>
                        <input className="b--light-silver bb" name="nights" type="number" min="1" max="7" />
                        <label>nights</label>
                    </div>
                    <button>Book</button>
                </form>
            ) : (
                <a href="/login">login to book your stay</a>
            )}

        </main>
    )
}