import React, { FC } from 'react';
import { Text, Button } from 'react-native';
import { useSelector } from 'react-redux';
import { useScrollToTop } from '@react-navigation/native';

import { IState } from '../reducers/index';
import { IToDoListReducer  } from '../reducers/toDoListReducer';

import { ISingleElList } from '../interfaces/ISingleElList';

import * as Global from '../components/GlobalStyle';

const ToDoList: FC<{switchView(formView: boolean)}> = props => {
	const ToDoListState = useSelector<IState , IToDoListReducer>(state => state.ToDoList);
	const goToForm = () => {
		props.switchView(true);
	}
	const ref = React.useRef(null);
	useScrollToTop(ref);
	return (
		<Global.ListView ref={ref}>
			{ToDoListState.ToDoList.map((el: ISingleElList, index: number) => 
			<Global.SingleElListView key={index}>
				<Text style={{padding: 5}}>{el.name}</Text>
				<Text style={{padding: 5}}>{el.description}</Text>
			</Global.SingleElListView>
			)}
			<Button title='Dodaj nowy' onPress={goToForm} />
		</Global.ListView>
	)
};

export default ToDoList;