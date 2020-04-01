const users = [ ];

const addUser = ({ id, username }) => {

	username = username.trim().toLowerCase();
	loggedAt = new Date();

	const existingUser = users.findIndex((user) => user.username === username);
	if(existingUser > -1 ){
		return {
			error : 'Username already exist'
		}
	};
	const user = { username, id, loggedAt };
	users.push(user);
	return user;
};

const removeUser = (id) => {
	const index = users.findIndex((user) => user.id === id);
	if(index !== -1){
		return users.splice(index, 1)[0]
	}
};
const getUserById = (id) => {
	if(users.includes(id)){
		const user = users.reduce((user) => user.id === id);
		return user
	}else {
		return {
			error: 'No such user Found'
		}
	}
};

const getUsers = () => { return users };

module.exports = { addUser, removeUser, getUsers, getUserById };
