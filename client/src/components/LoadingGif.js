import React from 'react'
import loadingImage from '../img/giphy.gif'

function loadingImage() {
    return(
        <div className="loading">
            <img width="200px" src={loadingImage} alt="image"/>
        </div>
    )
}

export default loadingImage;