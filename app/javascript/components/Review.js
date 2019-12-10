import React from 'react'

const Review = props => {
    const Star = props => <span className="mr1 gold">{props.star}</span>
    
    const stars = new Array(props.rating)
    .fill("★").map((star, i) => <Star key={`star-${i}`} star={star} />)
    
    const _stars = new Array(5 - props.rating)
    .fill("☆").map((star, i) => <Star key={`star-${i}`} star={star} />)

    return (
        <article className="flex items-center justify-end">
            <div className="flex-none">{stars}{_stars}</div>
            <div className="flex-auto">{props.comment}</div>
            <a className="link db flex items-center" href={`/users/${props.user.id}`}>
                <div className="h2 w2 br-100 with-bg-image mr1" style={{backgroundImage: `url(${props.user_image})`}}></div>
                <div>{props.user.name}</div>
            </a>
        </article>
    )
}

export default Review