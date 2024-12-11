const fetch = require('node-fetch');
const { url, method, body, headers } = require('./reader')
const requestsPerSecond = 50; // 次数

const makeFetchRequest = async() => {
const response = await fetch(url, {
	method,
	body,
	headers
});

const data = await response.json()
console.log(data);

};

const interval = 1000 / requestsPerSecond; // 1000 milliseconds (1 second) divided by requests per second

// setInterval(() => {
// }, interval);
makeFetchRequest();