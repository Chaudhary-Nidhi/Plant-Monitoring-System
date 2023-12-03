function validateForm() {
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    
    if (!username || !password) {
        alert('Please fill in both username and password fields.');
        return false;
    }

    //yaha par hardcore values change karni h
    const correctUsername = 'user123';
    const correctPassword = 'pass123';

    if (username === correctUsername && password === correctPassword) {
        alert('Login successful! Welcome, ' + username + '.');
    } else {
        alert('Invalid username or password. Please try again.');
    }

    
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    window.location.href = 'IntelliGrow.html';
    return false; 
}
