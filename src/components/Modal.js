import React, {Component} from 'react';
import Tiles from './Tiles';

const Modal=(props)=>{

    const songInfo = props.songInfo;
    const findArtist = props.findArtist;
    const closeModal = props.closeModal;
    console.log(typeof songInfo);
    console.log(songInfo);

    const info = songInfo!==null ? (
        <div className="card-image waves-effect waves-block waves-light" >
            {/* <p>{songInfo}</p> */}
            <img className="artistImage" src={songInfo.album.image[3]['#text']}></img>
            <br/>
            <div class = "space bold" onClick = {()=>findArtist(songInfo.mbid)}>{songInfo.name}</div>
            <div class = "space"><span >Album: </span><span class="orangee">{songInfo.album.title}</span>   <span class = 'gap'>Artist:</span> <span class="orangee">{songInfo.album.artist}</span></div>
            <div class = "space"><span class="orangee">{songInfo.listeners}</span> <span class="gapr">listeners </span> <span class="orangee gap">{songInfo.playcount}</span><span class="gapr"> playcounts</span></div>
            <div class = "space">
                <span class = "tags orange">{songInfo.toptags.tag[0].name}</span>
                <span class = "tags orange">{songInfo.toptags.tag[1].name}</span>
                <span class = "tags orange">{songInfo.toptags.tag[2].name}</span>
                <span class = "tags orange">{songInfo.toptags.tag[3].name}</span>
                <span class = "tags orange">{songInfo.toptags.tag[4].name}</span>
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
            <p>Finding Track</p>
        </div>
    );
    return(
        <div>
            
            {info}

        </div>
        
    )
}
export default Modal;