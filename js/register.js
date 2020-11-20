const registerUser = () => {

    const email = document.getElementById('emailRegister').value;
    const pass = document.getElementById('passwordRegister').value;

    firebase.auth().createUserWithEmailAndPassword(email,pass)
        .then(() => {
            window.alert('Register success');
        })
        .catch(err => {
            alert(err.message);
        })
}