import React, {Component} from 'react';
import Artist from './Artist';
import Tracks from './Tracks';
import Search from './Search';

const API_ADDRESS ='https://spotify-api-wrapper.appspot.com';

class App extends Component{
    state = {artistQuery: '', artist: null, tracks: []}; 

    // componentDidMount(){
    //     var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    //     var charactersLength = characters.length;
    //     var result = characters.charAt(Math.floor(Math.random() * charactersLength))
    //     this.searchArtist(result);
    // }

    searchArtist = artistQuery =>{
        fetch(`${API_ADDRESS}/artist/${artistQuery}`)
            .then(response => response.json())
            .then(json => {
                if(json.artists.total > 0){
                    const artist = json.artists.items[0];

                    this.setState({artist});

                    fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
                        .then(response => response.json())
                        .then(json => this.setState({tracks: json.tracks}))
                        .catch(error => alert(error.message));
                }
            })
            .catch(error => alert(erro.message));
    }

    render(){
        return(
            <div className = 'animated-background'>
                <h2>Music Pantomath</h2>
                <Search searchArtist = {this.searchArtist}/>
                <Artist artist = {this.state.artist} />
                <Tracks tracks = {this.state.tracks} />
            </div>
        )
    }
}

export default App;