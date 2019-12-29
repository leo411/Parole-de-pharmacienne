import React from 'react'

import logopharmacie from '../images/logopharmacie.png'

const Footer = () => (
    <div style={{ backgroundColor: '#e9ecef' }}>
        <div class="d-flex flex-column align-items-center">
            <img
                src={logopharmacie}
                alt=""
                style={{ maxHeight: '2rem', marginTop: '4px' }}
            />
            <h2
                style={{
                    textAlign: 'center',
                    fontSize: 'smaller',
                    marginTop: '8px'
                }}
            >
                Follow me{' '}
                <a
                    href="https://www.instagram.com/parole.de.pharmacienne/"
                    style={{ color: '#1e7e34' }}
                >
                    @parole.de.pharmacienne
                </a>
            </h2>
        </div>
    </div>
)

export default Footer
