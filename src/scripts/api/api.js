export const columnsMainApiUrl = `https://trello-82cb9.firebaseio.com/columns.json`;
export const tasksMainApiUrl = `https://trello-82cb9.firebaseio.com/tasks.json`;

export const columnsApi = (firebaseid) => {
  return `https://trello-82cb9.firebaseio.com/columns/${firebaseid}.json`;
};
export const tasksApi = (firebaseid) => {
  return `https://trello-82cb9.firebaseio.com/tasks/${firebaseid}.json`;
};
