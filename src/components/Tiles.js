import React, { Component } from 'react';
import axios from 'axios';

class Tiles extends Component{
    state = {
        post: [ ]
    }

   

    componentWillMount(){
        // console.log(this.state);
        let id = this.props.match.params.country;
        console.log("Final" + id);
        axios.get(`http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=${id}&api_key=82dc0bb7312d7f8b691fec5d6747b388&format=json`)
          .then( res => {
             const songs = res.data.tracks.track.slice(0,20);
             console.log(songs);
            this.setState({
              post: res.data.tracks.track.slice(0,20)
            },() => console.log(this.state))
        });
    }

    render(){
        // console.log("hrere"+ this.state);
        const songs  = this.state.post;
        console.log(songs);
        const CSS= {
            'width': '350px'
        }
        const songList = songs.length ? (
            songs.map( song => {
                return(
                    <div className="songsContainer" style={CSS}>
                        <div className="card-image waves-effect waves-block waves-light">
                            <img className="artistImage" src={song.image[3]['#text']}></img>
                        </div>
                        <div>
                            <p>{song.name}</p>
                        </div>
                        <div>
                            <p>{song.artist.name}</p>
                        </div>
                    </div>
                )
            })
        ) : (<div className='center'> Loading songs...</div>);

        return(
              <div className='home'>
                { songList }
              </div>
        )
    }
}
export default Tiles;