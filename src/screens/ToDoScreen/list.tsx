import React, { FC, useState } from 'react';
import { View } from 'react-native';

import Form from '../../components/Form';
import ToDoList from '../../components/ToDoList';

const List = () => {
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