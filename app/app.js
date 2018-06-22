import React, { Component } from "react";
import { AsyncStorage } from 'react-native'
import Login from './screens/login/login.stack.js';
import { Provider } from 'react-redux';
import store from './store.js';

class App extends Component {
	constructor() {
		super();
		this.state = {
		};
	}
	render() {
		return <Login />;
	}
}

const Root = () => (
	<Provider store={store}>
		<App/>
	</Provider>
)

export default Root;
