import React from 'react'

const Banner = props => (
    <div
        class="container-fluid d-flex align-items-center"
        style={{
            backgroundColor: '#000',
            position: 'relative',
            minHeight: `80vh`
        }}
    >
        <div
            style={{
                backgroundImage: `url(${props.image})`,
                backgroundSize: `cover`,
                backgroundPosition: 'center',
                opacity: 0.8,
                position: 'absolute',
                top: 0,
                bottom: 0,
                right: 0,
                left: 0
            }}
        ></div>
        <h1
            style={{
                color: '#fff',
                zIndex: '1'
            }}
        >
            {props.title}
        </h1>
    </div>
)

export default Banner
