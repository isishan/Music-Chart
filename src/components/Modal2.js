import React from 'react';

const Modal2 =(props) =>{
    const artistInfo = props.artistInfo;
    const closeModal = props.closeModal;

    const CSS2={
        'fontWeight':'bold'
    }

    const simArtist = artistInfo!==null ? ( artistInfo.similar.artist.map( art =>{
        return(
            <div className="songsContainer"   key = {art.name}>
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="artistImage" src={art.image[2]['#text']}></img>
                </div>
                <div >
                    <p className="orangee">{art.name}</p>
                </div>
                
            </div>
            
        )
    })
    ) : (null)

    const info = (artistInfo!==null) ? (
        <div className="card-image waves-effect waves-block waves-light" key = {artistInfo.mbid}>
            <div className=" space card-image waves-effect waves-block waves-light">
                <img className="artistImage" src={artistInfo.image[3]['#text']}></img>
            </div>
            <div className="space" style={CSS2}>
                {artistInfo.name}
            </div>
            <div className = "space"><span className="orangee">{artistInfo.stats.listeners}</span> <span className="gapr">listeners </span> <span className="orangee gap">{artistInfo.stats.playcount}</span><span className="gapr"> playcounts</span></div>
            <div className = "space">
                <span className = "tags orange">{artistInfo.tags.tag[0].name}</span>
                <span className = "tags orange">{artistInfo.tags.tag[1].name}</span>
                <span className = "tags orange">{artistInfo.tags.tag[2].name}</span>
                <span className = "tags orange">{artistInfo.tags.tag[3].name}</span>
                <span className = "tags orange">{artistInfo.tags.tag[4].name}</span>
            </div>
            <div className="space">
                <span>Published on: </span>
                <span className="orangee">{artistInfo.bio.published}</span>
            </div>
            <div className="space orangee">
                Related Artists
            </div>
            <div className="space">
                {simArtist}
            </div>
            <div className="space">
                {artistInfo.bio.summary}
            </div>
            <div  className="space">
                <button onClick={closeModal} className="space closeBtn red btn white-text waves-effect waves-light"> Close </button>
            </div> 
            
        </div>   
    ) : (
        <div className="space">
            Loading Artist Info...
        </div>
    )

    return(
        <div> 
            {info}
        </div>
    )
}

export default Modal2;