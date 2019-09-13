import React from 'react';

const Modal2 =(props) =>{
    const artistInfo = props.artistInfo;

    const info = (artistInfo!==null) ? (
        <div className="card-image waves-effect waves-block waves-light" key = {artistInfo.mbid}>

        </div>   
    ) : (null)

    return(
        <div>
            <p>Hello</p>
            {info}
        </div>
    )
}

export default Modal2;