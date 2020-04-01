const socket = io();

const userList = document.querySelector('#users');

socket.emit('join', { username } );

document.querySelector("#logout").addEventListener('click', ( ) => {
	socket.emit('logout', username);
	window.location.href = '../login.html';
});
socket.on('users', ( users ) => {
	html = users.users.map( (item, i) => {
		const time = moment(item.loggedAt).format('HH:MM:SS a');
		return (`<tr>
						<td>${i}</td>
						<td>${item.username.toUpperCase()}</td>
						<td>${time}
					</td>`)}).join("");
	userList.innerHTML = html;
});













