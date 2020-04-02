import { sendTask } from '../components/util';

jest.mock('../connection-firebase.js');

describe('sendTask', () => {
  it('Deberia de agregar una tarea', (done) => {
    const textTask = 'hola mundo';
    return sendTask(textTask)
      .then((response) => {
        expect(response.text).toBe(textTask);
        done();
      })
  });
  
});
