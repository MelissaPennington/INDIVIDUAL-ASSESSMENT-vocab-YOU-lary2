// import client from '../utils/client';

const endpoint = 'https://vocab-you-lary2-default-rtdb.firebaseio.com/';

const getEntries = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/entires.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const deleteEntries = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/entires/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});
const createEntry = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/entires.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});
const getSingleEntry = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/entires/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});
const updateEntry = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/entires/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});
const jsCards = () => new Promise((resolve, reject) => {
  console.warn('test');
  fetch(`${endpoint}/entires.json?orderBy="category"&equalTo="JS"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});
const cCards = () => new Promise((resolve, reject) => {
  console.warn('test');
  fetch(`${endpoint}/entires.json?orderBy="category"&equalTo="JS"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});
const pythonCards = () => new Promise((resolve, reject) => {
  console.warn('test');
  fetch(`${endpoint}/entires.json?orderBy="category"&equalTo="JS"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});
const phpCards = () => new Promise((resolve, reject) => {
  console.warn('test');
  fetch(`${endpoint}/entires.json?orderBy="category"&equalTo="JS"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});
export {
  getEntries,
  deleteEntries,
  getSingleEntry,
  updateEntry,
  createEntry,
  jsCards,
  cCards,
  pythonCards,
  phpCards
};
