import React from 'react'
import decomaison from '../images/decomaison.jpg'

const Bio = () => (
    <div class="d-flex">
        <img
            src={decomaison}
            style={{
                borderRadius: `50%`,
                height: '150px'
            }}
            alt=""
        />
        <em class="px-2 py-2" style={{ textAlign: 'left' }}>
            Docteur en pharmacie. Maman de 3 grands enfants. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
        </em>
    </div>
)
export default Bio
