function handleSubmit() {
	var username = document.querySelector('#username').value;
	var  password = document.querySelector('#password').value;
	const data = { username, password };
	if(!username || !password){
		alert('Please Enter the username and Password')
		return
	};
	window.localStorage.setItem('userData', JSON.stringify(data));
	window.location.href= "login.html";		
}