import React, {Component} from 'react';
import './App.css';
import Home from './components/Home';
import Tiles from './components/Tiles';
import axios from 'axios';
// import { Route, BrowserRouter, Switch } from 'react-router-dom';

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="App">
//         <Home />
//         <Switch>
//           <Route path = '/:country' component = {Tiles} />
//         </Switch>
//         </div>
//     </BrowserRouter>
//   );
// }

class App extends Component{
  
  state = {
    songs : [],
    songsId : null
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


  render(){
    return(
      <div className = "App">
        <Home changeCountry ={this.changeCountry}/>
        <Tiles id = {this.state.songs}/>
      </div>
    )
  }

}

export default App;
