import React, { FC, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector } from 'react-redux';

import { IState } from '../reducers/index';
import { IToDoListReducer  } from '../reducers/toDoListReducer';

import { ISingleElList } from '../interfaces/ISingleElList';

const ToDoList: FC<{switchView(formView: boolean)}> = props => {
	const ToDoListState = useSelector<IState , IToDoListReducer>(state => state.ToDoList)
	const goToForm = () => {
		props.switchView(true);
	}
	return (
		<View>
			{ToDoListState.ToDoList.map((el: ISingleElList, index: number) => 
			<View key={index}>
				<Text>{el.name}</Text>
				<Text>{el.description}</Text>
			</View>
			)}
			<Button title='Dodaj nowy' onPress={goToForm} />
		</View>
	)
};

export default ToDoList;