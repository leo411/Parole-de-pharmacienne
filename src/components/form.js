import React from 'react'
import './form.css'

const Form = props => (
    <form>
        <label className="label" style={{ width: '50%' }}>
            <input className="input" type="text" placeholder="Prénom"></input>
        </label>
        <label className="label" style={{ width: '50%' }}>
            <input className="input" type="text" placeholder="Nom"></input>
        </label>
        <label className="label">
            <input
                className="input"
                type="email"
                placeholder="Adresse Email"
            ></input>
        </label>
        <label className="label">
            <select className="input" defaultValue="Type de demande">
                <option disabled hidden>
                    Type de demande
                </option>
                <option>Blog</option>
                <option>Les boxs</option>
                <option>Atelier Nutrition</option>
            </select>
        </label>
        <textarea style={{ width: '100%' }} type="text" rows="8">
            Message
        </textarea>
        <button>Envoyer</button>
    </form>
)

export default Form
