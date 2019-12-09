import React from 'react'
import Property from './Property'

export default function (props) {
    return (
        <main>
            <h1>{props.user.name}</h1>
            <section className="pa4 w-100 card-list-section">
                {props.properties.map(property => <Property property={property} />)}
            </section>
            <section>
                <label>Add a property</label>
                <form action={`/users/${props.user.id}/properties`} method="POST" encType="multipart/form-data">
                    <input name="image" type="file" />
                    <input name="location" placeholder="location" />
                    <input name="price_per_night" type="number" placeholder="how much to charge each night?" />
                    <input name="authenticity_token" value={props.token} type="hidden"/>
                    <button>Add property</button>
                </form>
            </section>
        </main>
    )
}