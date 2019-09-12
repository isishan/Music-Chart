import React, { Component } from 'react';
import axios from 'axios';
import Modal from './Modal';

const Tiles = (props) =>{
    const songs = props.id;
    const showSongInfo = props.showSongInfo;
    
    window.onclick = function(event) {
        const modal = document.getElementsByClassName('modal')[0];
        const home = document.getElementsByClassName('home')[0];
        if (event.target == modal ) {
          modal.style.display = "none";
          home.style.display = "block";
        }
      }
        console.log(songs);
        const CSS= {
            'width': '350px'
        }
        const CSS2={
            'font-weight':'bold'
        }
        
        const CSS4={
            'display': 'block'
        }
        let songId=null;
        let songInfo = null;
        function openModal(key){
            
            songId = key;
            // songId = document.getElementsByClassName('songsContainer')[0].key;
            console.log(songId);
            showSongInfo(songId);
        }
        // const songList = songs.length ? (
            const songList = songs.map( song => {
                console.log("song "+song);
                return(
                    <div className="songsContainer" style={CSS} onClick={()=>openModal(song.mbid)} key = {song.mbid}>
                        <div className="card-image waves-effect waves-block waves-light">
                            <img className="artistImage" src={song.image[2]['#text']}></img>
                        </div>
                        <div style={CSS2}>
                            <p>{song.name}</p>
                        </div>
                        <div>
                            <p>{song.artist.name}</p>
                        </div>
                    </div>
                    
                )
            })
        // ) : (<div className='center'> Loading songs...</div>);

        console.log("Before return"+songList);

        return(
            <div>
              
              <div className='home'>
                { songList }
                
              </div>
              
              
            </div>
        )
    }
// }
export default Tiles;