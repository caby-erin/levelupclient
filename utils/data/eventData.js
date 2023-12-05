import { clientCredentials } from '../client';

const getEvents = (uid) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/events`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${uid}`,
    },
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const createEvent = (event) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/events`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(event),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateEvent = (payload, uid) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/events/${payload.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${uid}`,
    },
    body: JSON.stringify(payload),
  })
    .then((data) => {
      if (data) {
        resolve(data);
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const getSingleEvent = (event) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/events/${event}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getEventGames = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/eventgames`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const deleteEvent = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/events/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(resolve)
    .catch(reject);
});

const leaveEvent = (eventId, uid) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/events/${eventId}/leave`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${{ userId: uid }}`,
    },
  })
    .then((data) => {
      if (data) {
        resolve(data);
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const joinEvent = (eventId, uid) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/events/${eventId}/signup}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${uid}`,
    },
    body: JSON.stringify(uid),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// eslint-disable-next-line import/prefer-default-export
export {
  getEvents, createEvent, updateEvent, getSingleEvent, getEventGames, deleteEvent, leaveEvent, joinEvent,
};
