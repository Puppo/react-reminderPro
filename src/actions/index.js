import {ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS} from '../constants';

export function addReminder(text, dueDate) {
  const action = {
    type: ADD_REMINDER,
    text,
    dueDate
  };
  console.log('adding in actions', action);
  return action;
};

export function deleteReminder(id) {
  const action = {
    type: DELETE_REMINDER,
    id
  };
  console.log('deleting in actions', action);
  return action;
};

export function clearReminders() {
  const action = {
    type: CLEAR_REMINDERS
  };
  console.log('clear reminders in actions', action);
  return action;
}