/** @format */
import React from 'react';
import {AppRegistry,View} from 'react-native';
import {name as appName} from './app.json';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const App = () =>(
    <View style={{flex: 1}}>
       <Header title="Albums"></Header>
       <AlbumList></AlbumList>
    </View>
);


AppRegistry.registerComponent(appName, () => App);
