import React, {Component} from 'react';

class Search extends Component{
state = {artist: null, tracks: []};

    updateArtistQuery = event =>{
        this.setState({artistQuery: event.target.value});
    }

    handleKeyPress = event =>{
        if(event.key === 'Enter'){
            this.searchArtist();
        }
    }

    searchArtist = () => {
        this.props.searchArtist(this.state.artistQuery  );
    }

    render(){
        return(
            <div>
                <input 
                    onChange = {this.updateArtistQuery} 
                    onKeyPress = {this.handleKeyPress}
                    placeholder = 'Search for an artist' 
                />

                <button className = 'button' onClick = {this.searchArtist}>Search</button>
            </div>
        )
    }
}

export default Search;