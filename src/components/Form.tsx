import React, { FC, useState } from 'react';
import { TextInput, Text, View, Button, TouchableOpacity} from 'react-native';
import { Entypo } from '@expo/vector-icons';

import { useDispatch } from 'react-redux';

import { addNewListElem } from '../actions/ToDoListActions';
import { ISingleElList } from '../interfaces/ISingleElList';

import * as Global from '../components/GlobalStyle';
import Colors from '../constans/Colors';

type addNewListElem = ReturnType<typeof addNewListElem>;

const Form: FC<{ switchView(formView: boolean) }> = props => {

	const dispatch = useDispatch();
	const [nameInput, setNameInput] = useState<string>('');
	const [descInput, setDescInput] = useState<string>('');
	const nameValueChange = (txt: { nativeEvent: { text: React.SetStateAction<string>; }; }) => {
		setNameInput(txt.nativeEvent.text);
	};
	const descValueChange = (txt: { nativeEvent: { text: React.SetStateAction<string>; }; }) => {
		setDescInput(txt.nativeEvent.text);
	};

	const comeBack = () => {
		props.switchView(false);
	};

	const saveData = () => {
		dispatch<addNewListElem>(addNewListElem({
			name: nameInput,
			description: descInput,
			id: Date.now()
		} as ISingleElList
		));
		comeBack();
	};

	return (
		<Global.SafeView>
			<Global.CustomView>
				<Global.CustomText>Add new task</Global.CustomText>
				<Global.CustomTextInput value={nameInput} onChange={nameValueChange} placeholder='Name' />
				<Global.CustomTextInput value={descInput} onChange={descValueChange} placeholder='Description' />
				<Global.FormAddTask onPress={saveData}>
					<Global.ListTextEl>Dodaj</Global.ListTextEl>
				</Global.FormAddTask>
				<TouchableOpacity onPress={comeBack} style={{width: 150, height: 100, alignItems: 'center'}}>
					<Entypo name='back' size={42} color={Colors.deepskyblue}/>
				</TouchableOpacity>
			</Global.CustomView>
		</Global.SafeView>
	);
};

export default Form;