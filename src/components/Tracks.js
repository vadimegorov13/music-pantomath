import React, {Component} from 'react';

class Tracks extends Component{
    state = {playing: false, audio: null, playingPreviewUrl: null};

    playAudio = previewUrl => () => {
        const audio = new Audio(previewUrl);

        if(!this.state.playing){
            var playPromise = audio.play();
            if(playPromise !== undefined){
                playPromise.then(function() {
                    audio.play();
                  })
                .catch(error => {
                    if(this.state.playingPreviewUrl === previewUrl){
                        this.setState({playing: false})
                    }
                    window.alert("Sorry, the preview of this track is not available");
                });
            }
            this.setState({playing: true, audio, playingPreviewUrl: previewUrl});
        } else {
            this.state.audio.pause();

            if(this.state.playingPreviewUrl === previewUrl){
                this.setState({playing: false});
            } else {
                var playPromise = audio.play();
                if(playPromise !== undefined){
                    playPromise.then(function() {
                        audio.play();
                    })
                    .catch(error => {
                        window.alert("Sorry, the preview of this track is not available");
                    });
                }
                this.setState({audio, playingPreviewUrl: previewUrl});
            }
        }
    }

    trackIcon = track =>{
        if(this.state.playing && this.state.playingPreviewUrl === track.preview_url){
            return <span>
                        <font size = "8">
                            | |
                        </font>
                    </span>;
        }
        return <span>
                    <font size = "8">
                        &#9654;
                    </font>
                </span>;
    }

    render(){
        const {tracks} = this.props;

        return(
            <div>
                {
                    tracks.map(track =>{
                        const {id, name, album, preview_url} = track;

                        return(
                            <div  
                                key = {id} 
                                onClick = {this.playAudio(preview_url)}
                                className = 'track'
                            >
                                <img 
                                    src = {album.images[0].url} 
                                    alt = 'track-image' 
                                    className = 'track-image'
                                />
                                <p className = 'track-text'>{name}</p>
                                <p className = 'track-icon'>{this.trackIcon(track)}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Tracks;