import React, { FC, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {Text, View, Button} from 'react-native';

import * as Global from '../../components/GlobalStyle';

import Form from '../../components/Form';
import ToDoList from '../../components/ToDoList';

const Second = ({navigation}) => {
	const [formView, setFormView] = useState<boolean>(false);
	return (
		<Global.CustomView>
			{formView ? (
				<Form switchView={setFormView}/>
			) : (
				<ToDoList switchView={setFormView}/>
			)}
		</Global.CustomView>
	);
};

export default Second;