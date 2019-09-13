import React, {Component} from 'react';
import './App.css';
import Home from './components/Home';
import Tiles from './components/Tiles';
import Modal from './components/Modal';
import Modal2 from './components/Modal2';
import axios from 'axios';
// import { Route, BrowserRouter, Switch } from 'react-router-dom';

const CSS3={
  'display': 'none',
  'z-index' : '1',
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
    console.log("ID at chnageCountry() is  " + id);
    axios.get(`http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=${id}&api_key=82dc0bb7312d7f8b691fec5d6747b388&format=json`)
    .then( res => {
      console.log(res.data.tracks);
      const newSongs = res.data.tracks.track.slice(0,20);
      console.log(newSongs);
      console.log("Songs at changeCountry() "+ typeof newSongs);
     
      this.setState({
        songsId : id,
        songs : newSongs
      }, ()=>{console.log(this.state.songs);})
      
    });
  }

  showSongInfo = (songId) =>{

    this.setState({
      songInfo:null
    })
    document.getElementsByClassName('modal1')[0].style='display:block';
    document.getElementsByClassName('home')[0].style='display:none';
    console.log(document.getElementsByClassName('modal')[0].value);
            
    console.log(songId);
    axios.get(`http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=82dc0bb7312d7f8b691fec5d6747b388&mbid=${songId}&format=json`)
    .then( res =>{
      this.setState({
        songInfo : res.data.track
      })
    });
  }

  showEmpty = () =>{
    
  }

  findArtist = (mbid) =>{
    document.getElementsByClassName('modal1')[0].style='display:none';
    document.getElementsByClassName('modal2')[0].style = 'display:block';
    axios.get(`http://ws.audioscrobbler.com/2.0/?method=artist.getInfo&api_key=82dc0bb7312d7f8b691fec5d6747b388&mbid=${mbid}&format=json`)
    .then(res=>{
      this.setState({
        artistInfo : res.data
      })
    });
  }

  closeModal =() =>{
    console.log("Closing");
    document.getElementsByClassName('modal1')[0].style='display:none';
    document.getElementsByClassName('modal2')[0].style='display:none';
    document.getElementsByClassName('home')[0].style='display:block';
    
  }


  render(){
    return(
      <div className = "App">
        
        <Home changeCountry ={this.changeCountry}/>

        <div className = "modal modal1" style={CSS3}>
              <br /><br />
            <Modal songInfo = {this.state.songInfo} findArtist = {this.findArtist} closeModal = {this.closeModal}/>
        </div>
        <div className = "modal modal2" style={CSS3}>
          <Modal2 artistInfo = {this.state.artistInfo} closeModal = {this.closeModal}/>
        </div>
        
        <Tiles id = {this.state.songs} showSongInfo = {this.showSongInfo}/>
      </div>
    )
  }

}

export default App;
