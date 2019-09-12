import React, {Component} from 'react';
import Tiles from './Tiles';

const Modal=(props)=>{

    const songInfo = props.songInfo;
    console.log(typeof songInfo);
    console.log(songInfo);

    const info = songInfo!==null ? (
        <div className="card-image waves-effect waves-block waves-light">
            {/* <p>{songInfo}</p> */}
            <img className="artistImage" src={songInfo.album.image[3]['#text']}></img>
            <br/>
            <div class = "space bold">{songInfo.name}</div>
            <div class = "space"><span >Album: </span><span class="orangee">{songInfo.album.title}</span>   <span class = 'gap'>Artist:</span> <span class="orangee">{songInfo.album.artist}</span></div>
            <div class = "space"><span class="orangee">{songInfo.listeners}</span> <span class="gapr">listeners </span> <span class="orangee gap">{songInfo.playcount}</span><span class="gapr"> playcounts</span></div>
        </div>
    ) : null;
    return(
        <div>
            
            {info}

        </div>
        
    )
}
export default Modal;