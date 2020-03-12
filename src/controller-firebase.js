import firebase from './config-firebase';

export const getDataProducts = (category) => {
  return firebase.firestore().collection('menu').where('type', '==', category).get()
    .then(response => {
      const arr = [];
      response.docs.forEach(doc => {
        const obj = { 
          id: doc.id,
          ...doc.data(),
        };
        arr.push(obj);
      })
      return arr;
    })
}