import React, {useState} from 'react'

export default function (props) {
    const [preview, setPreview] = useState
    
    return (
        <form action="/users" method="POST" encType="multipart/form-data">
            {preview ? <img src={preview} /> : null}
            <input name="image" type="file" onChange={e => setPreview(URL.createObjectURL(e.target.files[0]))} />
            <input name="name" placeholder="username" />
            <input name="password" type="password" placeholder="password"/>
            <input name="authenticity_token" value={props.token} type="hidden"/>
            <button>Create Account</button>
        </form>
    )
}