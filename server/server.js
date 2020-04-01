const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const  { addUser, removeUser, getUsers, getUserById} = require('./utils/user');
const _ = require('underscore');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static('public'));
app.use(express.json());

io.on('connection', (socket) => {

	socket.on('join', ({ username }) => {
		addUser({ id: socket.id, username });
		io.emit('users', { users: getUsers()});
	});
	socket.on('logout', () => {
		removeUser(socket.id);
		io.emit('users', { users: getUsers() });
	}); 
});

server.listen(3000, () => console.log('Server is running on 3000 port '));