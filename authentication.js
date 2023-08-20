document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.querySelector('#login-button');
    
    loginButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default form submission behavior
        
        const usernameInput = document.querySelector('input[name="username"]');
        const passwordInput = document.querySelector('input[name="password"]');
        
        const username = usernameInput.value;
        const password = passwordInput.value;
        
        if (username === 'abed' && password === '123') {
            // Redirect to destinations.html
            window.location.href = 'destinations.html';
        } else {
            alert('Authentication failed. Please check your username and password. Hint: enter (abed) and (123)');
        }
    });
});
