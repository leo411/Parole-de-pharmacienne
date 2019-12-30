import React from 'react'

const Form = props => (
    <form>
        <label>
            <input type="text" placeholder="Prénom"></input>
        </label>
        <label>
            <input type="text" placeholder="Nom"></input>
        </label>
        <label>
            <input type="text" placeholder="Adresse Email"></input>
        </label>
        <label>
            Type de demande
            {/* <input type="text" placeholder="Type de demande"></input> */}
            <select>
                <option>Blog</option>
                <option>Les boxs</option>
                <option>Atelier Nutrition</option>
            </select>
        </label>
        <textarea type="text">Message</textarea>
        <button>Envoyer</button>
    </form>
)

export default Form
