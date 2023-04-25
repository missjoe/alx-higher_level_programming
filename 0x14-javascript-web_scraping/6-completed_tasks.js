#!/usr/bin/node
const request = require('request');

const url = process.argv[2];

request(url, function (error, response, body) {
  if (error) {
    console.error(error);
    return;
  }
  const todos = JSON.parse(body);
  const completedTasks = {};

  for (let i = 0; i < todos.length; i++) {
    if (todos[i].completed) {
      if (completedTasks[todos[i].userId]) {
        completedTasks[todos[i].userId]++;
      } else {
        completedTasks[todos[i].userId] = 1;
      }
    }
  }

  console.log(completedTasks);
});
