import React from 'react';

const Tiles = (props) =>{
    const songs = props.id;
    const showSongInfo = props.showSongInfo;
    
    const CSS= {
        'width': '350px'
    }
    const CSS2={
        'fontWeight':'bold'
    }
    let songId=null;
    function openModal(key){
        songId = key;
        showSongInfo(songId);
    }
        let songList = songs.length ? (songs.map( song => {
            return(
                <div className="songsContainer" style={CSS} onClick={()=>openModal(song.mbid)} key = {song.mbid}>
                    <div className=" space card-image waves-effect waves-block waves-light">
                        <img className="space artistImage" src={song.image[2]['#text']}></img>
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
        
    ) : (<div className='center'> Loading songs...</div>);


    return(
        <div>
            
            <div className='home'>
            { songList }
            </div>

        </div>
    )
}

export default Tiles;