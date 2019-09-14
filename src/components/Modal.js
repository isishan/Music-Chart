import React from 'react';

const Modal=(props)=>{

    const songInfo = props.songInfo;
    const findArtist = props.findArtist;
    const closeModal = props.closeModal;


    let info = null;
    if(songInfo===undefined)
    {
        info = (
            <div className="card-image waves-effect waves-block waves-light" >

                <div className="space">
                <p className="title-text">Track Not Found</p>
                </div>
                <div  className="space">
                    <button onClick={closeModal} className="space closeBtn red btn white-text waves-effect waves-light"> Close </button>
                </div> 
            </div>
        );
    }
    else{
        info = songInfo!==null ? (
            <div className="card-image waves-effect waves-block waves-light" >
                <img className="artistImage" src={songInfo.album.image[3]['#text']}></img>
                <br/>
                <div className = "space bold" onClick = {()=>findArtist(songInfo.artist.mbid)}>{songInfo.name}</div>
                <div className = "space"><span >Album: </span><span className="orangee">{songInfo.album.title}</span>   <span className = 'gap'>Artist:</span> <span className="orangee">{songInfo.album.artist}</span></div>
                <div className = "space"><span className="orangee">{songInfo.listeners}</span> <span className="gapr">listeners </span> <span className="orangee gap">{songInfo.playcount}</span><span className="gapr"> playcounts</span></div>
                <div className = "space">
                    <span className = "tags orange">{songInfo.toptags.tag[0].name}</span>
                    <span className = "tags orange">{songInfo.toptags.tag[1].name}</span>
                    <span className = "tags orange">{songInfo.toptags.tag[2].name}</span>
                    <span className = "tags orange">{songInfo.toptags.tag[3].name}</span>
                    <span className = "tags orange">{songInfo.toptags.tag[4].name}</span>
                </div>
                <div className="space">
                    <span>Published on: </span>
                    <span className="orangee">{songInfo.wiki.published}</span>
                </div>
                <div className = "space">
                    <p>{songInfo.wiki.summary}</p>
                </div>
                <div  className="space">
                    <button onClick={closeModal} className="space closeBtn red btn white-text waves-effect waves-light"> Close </button>
                </div> 
            </div>
        ) : (
            <div className = "space">
                <p>Finding Track...</p>
            </div>
        );
    }
    
    return(
        <div>
            
            {info}

        </div>
        
    )
}
export default Modal;