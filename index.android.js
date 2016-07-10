import React, { Component } from 'react'
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Image,
	Navigator,
	TouchableOpacity,
} from 'react-native'
import StartScreen from './StartScreen'
import QuoteScreen from './QuoteScreen'

const { quotes } = require('./quotes.json')

class RelaxationStation extends Component {
	render() {
		const quote = quotes[2]
		return (
			<Navigator
				initialRoute={{ name: 'StartScreen' }}
				renderScene={(route, navigator) => {
					switch (route.name) {
					case 'StartScreen':
						return <StartScreen onStartHandler={() => navigator.push({ name: 'QuoteScreen' })} />
					case 'QuoteScreen':
						return <QuoteScreen text={quote.text} source={quote.source} />
					}
				}}
			/>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#efefef',
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
		// On Android we can't use the ShadowPropTypesIOS styles used in the course,
		// so instead we rely on the very similar elevation property.
		elevation: 2,
	},
	buttonImage: {
		width: 200,
		height: 200,
	},
})

AppRegistry.registerComponent('RelaxationStation', () => RelaxationStation)
