import React, { useState } from 'react';
import { Provider } from 'react-redux';
import * as Contacts from 'expo-contacts';
import { Gyroscope } from 'expo-sensors';

import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Fonts from 'expo-font';
import { Entypo, MaterialIcons } from '@expo/vector-icons';

import store from './src/tools/store';
import Main from './src/Main';

export default function App() {

	const getContacts = () => {
		Contacts.getContactsAsync();
	};

	const [isReady, setReady] = useState(false);

	const _cacheResourcesAsync = async () => {
		const images = [
			require('./src/assets/foto.png'),
			require('./src/assets/foto2.png')
		];

		const icons = [
			Entypo.font,
			MaterialIcons.font
		];

		const cacheFonts = icons.map(icon => {
			return Fonts.loadAsync(icon);
		});

		const cacheImages = images.map(image => {
			return Asset.fromModule(image).downloadAsync();
		});

		await Promise.resolve(cacheImages);
		await Promise.resolve(cacheFonts);
	};

	return (
		isReady === false ? (
			<AppLoading
				startAsync={_cacheResourcesAsync}
				onFinish={() => setReady(true)}
				onError={console.warn}
			/>
				) :
		<Provider store={store}>
			<Main />
		</Provider>
	);
}
