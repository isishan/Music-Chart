import React, { Component } from 'react';
import axios from 'axios';
import Modal from './Modal';

const Tiles = (props) =>{
    const songs = props.id;
    
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
        const CSS3={
            'display': 'none',
            'z-index' : '1',
            'position': 'fixed',
            'left': '0',
            'top': '0'
        }
        const CSS4={
            'display': 'block'
        }
        let songId=null;
        let songInfo = null;
        function openModal(key){
            document.getElementsByClassName('modal')[0].style='display:block';
            document.getElementsByClassName('home')[0].style='display:none';
            console.log(document.getElementsByClassName('modal')[0].value);
            songId = key;
            // songId = document.getElementsByClassName('songsContainer')[0].key;
            console.log(songId);
            axios.get(`http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=82dc0bb7312d7f8b691fec5d6747b388&mbid=${songId}&format=json`)
            .then( res =>{
                songInfo = res.data.track;
            });
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
              <div className = "modal" style={CSS3}>
                    <br /><br />
                  <Modal songInfo = {songInfo}/>
              </div>
              <div className='home'>
                { songList }
                
              </div>
              
              
            </div>
        )
    }
// }
export default Tiles;