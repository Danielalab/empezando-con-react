import firebase from '../connection-firebase';

export const sendTask = (text) =>
  firebase.collection('tasks').add({
    text,
  });