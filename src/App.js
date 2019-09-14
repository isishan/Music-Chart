import React, {Component} from 'react';
import './App.css';
import Home from './components/Home';
import Tiles from './components/Tiles';
import Modal from './components/Modal';
import Modal2 from './components/Modal2';
import axios from 'axios';

const CSS3={
  'display': 'none',
  'zIndex' : '1',
  'position': 'fixed',
  'left': '0',
  'top': '0'
}

class App extends Component{
  
  state = {
    songs : [],
    songsId : null,
    songInfo : null,
    artistInfo : null
  }

  changeCountry = (id) =>{
    this.setState({
      songs: []
    })
    document.getElementsByClassName('modal1')[0].style='display:none';
    document.getElementsByClassName('modal2')[0].style='display:none';
    document.getElementsByClassName('home')[0].style='display:block';
    console.log("ID at chnageCountry() is  " + id);
    axios.get(`http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=${id}&api_key=82dc0bb7312d7f8b691fec5d6747b388&format=json`)
    .then( res => {
      const newSongs = res.data.tracks.track.slice(0,20);
      
      this.setState({
        songsId : id,
        songs : newSongs
      })
      
    });
  }

  showSongInfo = (songId) =>{

    this.setState({
      songInfo:null
    })
    document.getElementsByClassName('modal1')[0].style='display:block';
    document.getElementsByClassName('home')[0].style='display:none';
            
    axios.get(`http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=82dc0bb7312d7f8b691fec5d6747b388&mbid=${songId}&format=json`)
    .then( res =>{
      this.setState({
        songInfo : res.data.track
      })
    });
  }

 

  findArtist = (mbid) =>{
    this.setState({
      artistInfo:null
    })
    document.getElementsByClassName('modal1')[0].style='display:none';
    document.getElementsByClassName('modal2')[0].style = 'display:block';
    axios.get(`http://ws.audioscrobbler.com/2.0/?method=artist.getInfo&api_key=82dc0bb7312d7f8b691fec5d6747b388&mbid=${mbid}&format=json`)
    .then(res=>{
      this.setState({
        artistInfo : res.data.artist
      })
    });
  }

  closeModal =() =>{
    document.getElementsByClassName('modal1')[0].style='display:none';
    document.getElementsByClassName('modal2')[0].style='display:none';
    document.getElementsByClassName('home')[0].style='display:block'; 
  }


  render(){
    return(
      <div className = "App">
        <div>
          <Home changeCountry ={this.changeCountry}/>
        </div>

        <div className = "modal modal1" style={CSS3}>
          <Modal songInfo = {this.state.songInfo} findArtist = {this.findArtist} closeModal = {this.closeModal}/>
        </div>

        <div className = "modal modal2" style={CSS3}>
          <Modal2 artistInfo = {this.state.artistInfo} closeModal = {this.closeModal}/>
        </div>
        
        <div>
          <Tiles id = {this.state.songs} showSongInfo = {this.showSongInfo}/>
        </div>
        
      </div>
    )
  }

}

export default App;
