import React, { Component } from 'react'
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
} from 'react-native'

const zenImage = require('./assets/zen.png')

class RelaxationStation extends Component {
	render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity style={styles.button} onPress={() => { alert('I was pressed!') }}>
					<Image source={zenImage} style={styles.buttonImage} />
				</TouchableOpacity>
				<Text style={styles.readyText}>I'm ready to relax...</Text>
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
	readyText: {
		fontSize: 20,
		fontStyle: 'italic',
		color: '#ffffff',
	},
	button: {
		backgroundColor: '#859a9b',
		borderRadius: 20,
		padding: 10,
		marginBottom: 20,
		shadowColor: '#303838',
		shadowOffset: { width: 0, height: 5 },
		shadowRadius: 10,
		shadowOpacity: 0.35,
	},
	buttonImage: {
		width: 200,
		height: 200,
	},
})

AppRegistry.registerComponent('RelaxationStation', () => RelaxationStation)
