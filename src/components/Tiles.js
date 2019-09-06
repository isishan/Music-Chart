import React, { Component } from 'react';
import axios from 'axios';

const Tiles = (props) =>{
    const songs = [props];
    // state = {
    //     post: [ ],
    //     postId: null
    // }

   

    // componentDidUpdate(){
    //     // console.log(this.state);
    //     let id = this.props.match.params.country;
    //     // id = "India";
    //     console.log("Final" + id);
        // axios.get(`http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=${id}&api_key=82dc0bb7312d7f8b691fec5d6747b388&format=json`)
        //   .then( res => {
        //      const songs = res.data.tracks.track.slice(0,20);
        //      console.log(songs);
        //      let newSongs = res.data.tracks.track.slice(0,20);
    //          if(id!==this.state.postID)
    //          {
    //             this.setState({
    //             post: newSongs,
    //             postId : id
    //             },() => console.log("CallbackTiles  "+this.state.postId))
    //          }
    //     });
    // }

    // render(){
        // console.log("hrere"+ this.state);
        // const songs  = this.state.post;
        console.log(songs);
        const CSS= {
            'width': '350px'
        }
        // const songList = songs.length ? (
            const songList = songs.map( song => {
                console.log("song "+song);
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
        // ) : (<div className='center'> Loading songs...</div>);

        console.log("Before return"+songList);

        return(
              <div className='home'>
                { songList }
              </div>
        )
    }
// }
export default Tiles;