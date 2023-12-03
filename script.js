function validateForm() {
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    
    if (!name || !email || !password) {
        alert('Please fill in all fields.');
        return false;
    }

    
    alert('Registration successful!\nName: ' + name + '\nEmail: ' + email + '\n\nPlease Click ok');

    
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    window.location.href = 'IntelliGrow.html';
    return false; 
}
