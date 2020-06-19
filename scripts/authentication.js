function readAndSetName() {
  var signInText = document.getElementById('dashboard-signin');
  var accountButton = document.getElementById('dashboard-account')
  var user = firebase.auth().currentUser;
console.log(user.photoURL)
  if (user) {
  // User is signed in.
  console.log(user)
  try {
    signInText.innerHTML = `${user.email}`
    accountButton.innerHTML = `${user.displayName}`
  } catch (e) {
    console.log(e)
  }
  } else {
  // No user is signed in.
  console.log('no user')
  }
}