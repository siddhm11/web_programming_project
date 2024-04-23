const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const signInForm = document.querySelector('.sign-in form');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

signInForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    
    // Perform your login validation here
    // For example, you might make an AJAX request to your backend to validate the credentials
    
    // Assuming validation is successful, redirect the user
    // You can use window.location.href to redirect the user
    window.location.href = "courses.html";
});
