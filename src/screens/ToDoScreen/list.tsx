import React, { FC, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';

import Form from '../../components/Form';
import ToDoList from '../../components/ToDoList';

const List = ({navigation}) => {
	const [formView, setFormView] = useState<boolean>(false);
	return (
		<View>
			{formView ? (
				<Form switchView={setFormView}/>
			) : (
				<ToDoList switchView={setFormView}/>
			)}
		</View>
	);
};

export default List;