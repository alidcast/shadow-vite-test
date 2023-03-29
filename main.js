import { AppRegistry } from 'react-native'
import { App } from "./dist/js/app.js"

AppRegistry.registerComponent('AppRoot', App)

AppRegistry.runApplication('AppRoot', {
	initialProps: {},
	rootTag: document.getElementById('root')
})
