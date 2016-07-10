/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
} from 'react-native'

class RelaxationStation extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>
					Welcome to My App!
				</Text>
				<Text style={styles.instructions}>
					To get started, edit index.android.js
				</Text>
				<Text style={styles.instructions}>
					Shake or press menu button for dev menu
				</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#161737',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
		color: '#ffffff',
	},
	instructions: {
		textAlign: 'center',
		color: '#dbdbdb',
		marginBottom: 5,
	},
})

AppRegistry.registerComponent('RelaxationStation', () => RelaxationStation)
