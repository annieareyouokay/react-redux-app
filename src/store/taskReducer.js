import { taskUpdated, taskDeleted } from "./actionTypes";

export function taskReducer(state, action) {
  switch (action.type) {
    case taskUpdated:
      const newArray = [...state];
      const index = newArray.findIndex((e) => e.id === action.payload.id);
      newArray[index] = { ...newArray[index], ...action.payload };
      return newArray;
    case taskDeleted:
      const filteredArray = state.filter((e) => e.id !== action.payload.id);
      return filteredArray;
    default:
      return state;
  }
}