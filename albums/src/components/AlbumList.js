import React, { Component } from 'react';
import {ScrollView, Text} from 'react-native';
import axios from 'axios';

class AlbumList extends Component{
    state = { albums : []};

    componentWillMount(){
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then((response)=>{
            this.setState({albums: response.data});
        });
    }

    renderAlbums(){
        this.state.albums.map(album =>{
            // <AlbumDetail key={album.title} album={album} />
            <Text>{album.title}</Text>
        });
    }
    
    render(){
        return(
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumList;