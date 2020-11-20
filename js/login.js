const loginUser = () => {

    const email = document.getElementById('emailLogin').value;
    const pass = document.getElementById('passwordLogin').value;

    firebase.auth().signInWithEmailAndPassword(email,pass)
        .then(() => {
            alert('Login success...');
            window.location.assign('about.html');
        })
        .catch(err => alert(err.message));
}

// getting user profile
const getUserProfile = () => {
    const user = firebase.auth().currentUser;

    if( user != null ) {
        console.log(user)
    }
    else {
        alert('user does not exist')
    }
}

// logout user
const logout = () => {
    firebase.auth().signOut()
        .then(() => {
            alert('Logged out')
        })
        .catch(err => alert(err.message));
}

// updating user profile
const updateProfile = () => {
    const user = firebase.auth().currentUser;

    if( user != null ) {
        user.updateProfile({
            displayName: 'Updated'
        })
        user.updateEmail('updating@gmail.com');
    }
    else {
        alert('user does not exist')
    }
} 