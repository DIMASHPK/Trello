export const columnsMainApiUrl = (idToken) =>
  `https://trello-82cb9.firebaseio.com/columns.json?auth=${idToken}`;
export const tasksMainApiUrl = (idToken) =>
  `https://trello-82cb9.firebaseio.com/tasks.json?auth=${idToken}`;

export const columnsApi = (firebaseid) => {
  const token = localStorage.getItem("token");

  return `https://trello-82cb9.firebaseio.com/columns/${firebaseid}.json?auth=${token}`;
};
export const tasksApi = (firebaseid) => {
  const token = localStorage.getItem("token");

  return `https://trello-82cb9.firebaseio.com/tasks/${firebaseid}.json?auth=${token}`;
};
