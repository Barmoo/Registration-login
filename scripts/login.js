const loginForm = document.querySelector('#login');
loginForm.addEventListener('submit', function (event) {
    event.preventDefault()
    const formData = new FormData(regusterForm);
    const messageH1 = documentg.querySelector('#message')
    messageH1.textContent = 'login successfully'

});


//write fullname function

function fullName(firstName, lastName) {
    //return firstname + lastname
    return `${firstName} ${lastName}`
}
const myName = fullName('Belinda', 'Armoo')
console.log(myName)
