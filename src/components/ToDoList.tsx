import React, { FC } from 'react';
import { View,Text, Button, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useScrollToTop } from '@react-navigation/native';
import styled from 'styled-components/native';

import { IState } from '../reducers/index';
import { IToDoListReducer  } from '../reducers/toDoListReducer';

import { ISingleElList } from '../interfaces/ISingleElList';

import * as Global from '../components/GlobalStyle';
import { removeListElem } from '../actions/ToDoListActions';

const TempView = styled.View`
	background-color: red;
	alignItems: center;
	margin-top: 23px;
	margin-bottom: 70px;
`;

type removeListElem = ReturnType<typeof removeListElem>;


const ToDoList: FC<{switchView(formView: boolean)}> = props => {
	const ToDoListState = useSelector<IState , IToDoListReducer>(state => state.ToDoList);
	const goToForm = () => {
		props.switchView(true);
	}
	const dispatch = useDispatch();
	const removeData = (id: number) => {
		dispatch<removeListElem>(removeListElem(id));
	}
	const ref = React.useRef(null);
	useScrollToTop(ref);
	// View ref={ref}>
	return (
		<TempView>
			{//console.log(ToDoListState.ToDoList) //check console.log what is ToDoListState
			} 
			<Button title='Dodaj nowy' onPress={goToForm} />
			<Global.FlatView
				ref={ref}
				keyExtractor = {(item: ISingleElList, index: number) => index.toString()} //make keyextractor work for id as number
				data={ToDoListState.ToDoList}
				renderItem={ ({ item } : {item : ISingleElList} ) => //add interface
				<Global.SingleElListView>
					<Text>{item.name}</Text>
					<Text>{item.description}</Text>
					<Button title='delete' onPress={() => removeData(item.id)}></Button>
				</Global.SingleElListView>
			}
			
			/>



			{/* {ToDoListState.ToDoList.map((el: ISingleElList, index: number) => 
			<Global.SingleElListView key={index}>
				<Text style={{padding: 5}}>{el.name}</Text>
				<Text style={{padding: 5}}>{el.description}</Text>
				<Text>{el.id}</Text>
			</Global.SingleElListView>
			)} */}


		</TempView>
	)
};

export default ToDoList;