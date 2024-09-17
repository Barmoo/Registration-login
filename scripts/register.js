// Get form element by id
const registerForm = document.querySelector('#register');
// Handle form submit event
registerForm.addEventListener('submit', function (event) {
    event.preventDefault();
    //collect form data
    const formData = new FormData(registerForm);
    //send data to backend
    // display success message to user
    const messageH1 = document.querySelector('#message');
    messageH1.textContent = 'Account registered successfully';
});

   

// declareVariableAge
//let age = 71;

// defineQuareAgeFunction
// function squareAge(age){
//     return age** 2;
// };
// let squaredAge = squareAge(54);
// console.log(squaredAge);



