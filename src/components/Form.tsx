import React, { FC, useState } from 'react';
import { TextInput, View, Button } from 'react-native';

import { useDispatch } from 'react-redux';

import { addNewListElem } from '../actions/ToDoListActions';
import { ISingleElList } from '../interfaces/ISingleElList';

type addNewListElem = ReturnType<typeof addNewListElem>;

const Form: FC<{switchView(formView: boolean)}> = props => {
	const dispatch = useDispatch();
	const [nameInput, setNameInput] = useState<string>('');
	const [descInput, setDescInput] = useState<string>('');

	const nameValueChange = (txt) => {
		setNameInput(txt.nativeEvent.text);
	}
	const descValueChange = (txt) => {
		setDescInput(txt.nativeEvent.text);
	}

	const saveData = () => {
		dispatch<addNewListElem>(addNewListElem({
			name: nameInput,
			description: descInput
		} as ISingleElList
		))
		props.switchView(false);
	}

	return (
		<View>
			<TextInput value={nameInput} onChange={nameValueChange} placeholder='Name'/>
			<TextInput value={descInput} onChange={descValueChange} placeholder='Description'/>
			<Button title='Dodaj' onPress={saveData}/>
		</View>
	)
};

export default Form;