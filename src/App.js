import React, {Component} from 'react';
import './App.css';
import Home from './components/Home';
import Tiles from './components/Tiles';
import Modal from './components/Modal';
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
    songInfo : null
  }

  changeCountry = (id) =>{
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

    document.getElementsByClassName('modal')[0].style='display:block';
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


  render(){
    return(
      <div className = "App">
        
        <Home changeCountry ={this.changeCountry}/>

        <div className = "modal" style={CSS3}>
              <br /><br />
            <Modal songInfo = {this.state.songInfo}/>
        </div>
        
        <Tiles id = {this.state.songs} showSongInfo = {this.showSongInfo}/>
      </div>
    )
  }

}

export default App;
