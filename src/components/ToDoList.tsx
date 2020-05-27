import React, { FC } from 'react';
import { Text, TouchableOpacity, SafeAreaView, Image, Platform, View, Button } from 'react-native';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useScrollToTop } from '@react-navigation/native';

import Colors from '../constans/Colors';
import { MaterialIcons } from '@expo/vector-icons';

import { IState } from '../reducers/index';
import { IToDoListReducer  } from '../reducers/toDoListReducer';

import { ISingleElList } from '../interfaces/ISingleElList';

import * as Global from '../components/GlobalStyle';
import { removeListElem } from '../actions/ToDoListActions';

import button from '../assets/button.png';

type removeListElem = ReturnType<typeof removeListElem>;

// u need to wrap text to align verticallyc
const TextViewWrap = styled.View`
	flex: 3;
`;

const TextWrapper = styled.View`
	padding: 20px;
	borderRadius: 5px;
	backgroundColor: ${Colors.notsodarkblue};
`;

const Touch = styled.TouchableOpacity`
	borderRadius: 5px;
	backgroundColor: ${Colors.lightskyblue};
	flex: 1;
	justifyContent: center;
	alignItems: center;
`;

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

	return (
		<Global.SafeView>
			<Global.FlatView
			ref={ref}
			keyExtractor = {(item: ISingleElList, index: number) => index.toString()} // make keyextractor work for id as number
			data={ToDoListState.ToDoList}
			renderItem={({item}: {item: ISingleElList}) =>
				<Global.SingleElListView>
					<TextViewWrap>
						<TextWrapper style={{borderBottomWidth: 1, borderBottomColor: 'white'}}>
							<Global.ListTextEl>{item.name}</Global.ListTextEl>
						</TextWrapper>
						<TextWrapper>
							<Global.ListTextEl>{item.description}</Global.ListTextEl>
						</TextWrapper>
					</TextViewWrap>
					<Touch onLongPress={() => removeData(item.id)}>
						<MaterialIcons name='delete' size={36} color={Colors.darkblue}/>
					</Touch>

				</Global.SingleElListView>
			}
			/>
				<Global.AddTaskButton style={{position: 'absolute', top: 400, right: 30}} onPress={goToForm}>
					<Global.AddButtonImg source={button}/>
				</Global.AddTaskButton>
		</Global.SafeView>
	);
};

export default ToDoList;