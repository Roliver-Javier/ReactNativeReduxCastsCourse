import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View, Text } from 'react-native';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {

    componentWillMount() {
        const config = {
            apiKey: "AIzaSyCdEUBazbITo0FOV2yRYMrVfcFImc2AVEc",
            authDomain: "manager-66424.firebaseapp.com",
            databaseURL: "https://manager-66424.firebaseio.com",
            projectId: "manager-66424",
            storageBucket: "manager-66424.appspot.com",
            messagingSenderId: "827296292344"
        };
        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers);
        return (
            <Provider store={store}>
                <LoginForm>
                </LoginForm>
            </Provider>
        );
    }
}

export default App;