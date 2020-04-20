import React from 'react';

const Artists = ({artists}) => {

        return(
            <div>
                {
                    artists.map(artist =>{
                        const{images, name, followers, genres} = artist;

                        return(
                            <div style={{display: 'inline-block', width: 400, margin: 20}} key = {id} onClick = {this.playAudio(preview_url)}>
                                <img 
                                    src = {images[0] && images[0].url} 
                                    alt = 'artist-profile' 
                                    style = {{
                                        width: 400,
                                        height: 400
                                    }}
                                />
                                <p>{name}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    
}

export default Artists;