import React, { FC } from 'react';
import { Text, TouchableOpacity, SafeAreaView, Image, Platform } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useScrollToTop } from '@react-navigation/native';
import Colors from '../constans/Colors';

import { IState } from '../reducers/index';
import { IToDoListReducer  } from '../reducers/toDoListReducer';

import { ISingleElList } from '../interfaces/ISingleElList';

import * as Global from '../components/GlobalStyle';
import { removeListElem } from '../actions/ToDoListActions';

import button from '../assets/button.png';

type removeListElem = ReturnType<typeof removeListElem>;

const ToDoList: FC<{switchView(formView: boolean)}> = props => {
	const ToDoListState = useSelector<IState , IToDoListReducer>(state => state.ToDoList);
	const goToForm = () => {
		props.switchView(true);
	};
	const dispatch = useDispatch();
	const removeData = (id: number) => {
		dispatch<removeListElem>(removeListElem(id));
	};
	const ref = React.useRef(undefined);
	useScrollToTop(ref);
	// View ref={ref}>
	return (
		<Global.SafeView>
			<Global.FlatView
			ref={ref}
			keyExtractor = {(item: ISingleElList, index: number) => index.toString()} // make keyextractor work for id as number
			data={ToDoListState.ToDoList}
			renderItem={({item}: {item: ISingleElList}) =>
				<Global.SingleElListView>
					<Text style={{borderWidth: 1, margin: 2, textAlign: 'center'}}>{item.name}</Text>
					<Text style={{borderWidth: 1, margin: 2}}>{item.description}</Text>
					<TouchableOpacity onLongPress={() => removeData(item.id)} style={{backgroundColor: Colors.deepskyblue, margin: 2, padding: 10}}>
						<Text>Delete</Text>
					</TouchableOpacity>
				</Global.SingleElListView>
			}
			/>
				<TouchableOpacity style={{position: 'absolute', top: 400, right: 30}} onPress={goToForm}>
					<Image source={button} style={{width: 70, height: 70}}/>
				</TouchableOpacity>
		</Global.SafeView>

			/* {ToDoListState.ToDoList.map((el: ISingleElList, index: number) =>
			<Global.SingleElListView key={index}>
				<Text style={{padding: 5}}>{el.name}</Text>
				<Text style={{padding: 5}}>{el.description}</Text>
				<Text>{el.id}</Text>
			</Global.SingleElListView>
			)} */
	);
};

export default ToDoList;