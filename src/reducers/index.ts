import { combineReducers } from 'redux';

import ToDoList, { IToDoListReducer } from './toDoListReducer';

export default combineReducers({
	ToDoList
});

export interface IState {
	ToDoList: IToDoListReducer;
}