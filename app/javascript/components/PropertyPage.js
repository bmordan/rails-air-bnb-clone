import React from 'react'

export default function (props) {
    return (
        <main>
            <img src={props.image} />
            <h2 className="pl2">{props.property.location}</h2>
            <hr />
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

        </main>
    )
}