import React, { FC, useState } from 'react';
import { TextInput,Text, View, Button } from 'react-native';

import { useDispatch } from 'react-redux';

import { addNewListElem } from '../actions/ToDoListActions';
import { ISingleElList } from '../interfaces/ISingleElList';

import * as Global from '../components/GlobalStyle';

type addNewListElem = ReturnType<typeof addNewListElem>;

const Form: FC<{switchView(formView: boolean)}> = props => {

	const dispatch = useDispatch();
	const [nameInput, setNameInput] = useState<string>('');
	const [descInput, setDescInput] = useState<string>('');
	const nameValueChange = (txt: { nativeEvent: { text: React.SetStateAction<string>; }; }) => {
		setNameInput(txt.nativeEvent.text);
	}
	const descValueChange = (txt: { nativeEvent: { text: React.SetStateAction<string>; }; }) => {
		setDescInput(txt.nativeEvent.text);
	}
	
	const saveData = () => {
		dispatch<addNewListElem>(addNewListElem({
			name: nameInput,
			description: descInput,
			id: Date.now()
		} as ISingleElList
		))
		props.switchView(false);
	}

	return (
		<Global.ListView>
			<TextInput value={nameInput} onChange={nameValueChange} placeholder='Name'/>
			<TextInput value={descInput} onChange={descValueChange} placeholder='Description'/>
			<Button title='Dodaj' onPress={saveData}/>
		</Global.ListView>
	)
};

export default Form;