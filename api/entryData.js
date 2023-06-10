import client from '../utils/client';

const endpoint = client.databaseURL;

const getEntries = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/entires.json`, {
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
export {
  getEntries,
  deleteEntries,
  getSingleEntry,
  updateEntry,
  createEntry
};
