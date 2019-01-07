import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import ReduxThunk from 'redux-thunk';
import Router from './Router';

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
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;