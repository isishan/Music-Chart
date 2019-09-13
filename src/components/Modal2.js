import React from 'react';

const Modal2 =(props) =>{
    const artistInfo = props.artistInfo;
    const closeModal = props.closeModal;

    const info = (artistInfo!==null) ? (
        <div className="card-image waves-effect waves-block waves-light" key = {artistInfo.mbid}>
            <div className = "space">
                <p>{artistInfo.mbid}</p>
            </div>


            <div  className="space">
                <button onClick={closeModal} className="space closeBtn red btn white-text waves-effect waves-light"> Close </button>
            </div> 
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