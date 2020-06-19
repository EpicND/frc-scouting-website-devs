var dashboardSignin = document.querySelector('.trigger');

dashboardSignin.addEventListener('click', function() {
  if(checkAuthState()) {
    signOut()
  }
})


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
  console.log('no user');
  }
}


function checkAuthState() {
  var user = firebase.auth().currentUser;
  var bool;
    if (user) {
    // User is signed in.
      bool = true
    } else {
      bool = false;
    }
    return bool;
}

function signOut() {
  firebase.auth().signOut().then(function() {
    // console.log('Signed Out');
  }, function(error) {
    console.error('Sign Out Error', error);
  });
}


firebase.auth().onAuthStateChanged(function(user) {
  var signInText = document.getElementById('dashboard-signin');
  var accountButton = document.getElementById('dashboard-account')
  var avatar = document.querySelector('.avatar')
  var user = firebase.auth().currentUser;
  if (user) {
    // User is signed in.
    toggleModalFromDrawer()
    try {
      signInText.innerHTML = `${user.email}`
      accountButton.innerHTML = `${user.displayName}`
      if(user.photoURL){
      avatar.innerHTML = `<img class="avatar" src="${user.photoURL}">`
      } else {
        avatar.innerHTML = 'account_circle'
      }
    } catch (e) {
      console.log(e)
    }
  } else {
    // No user is signed in.
    signInText.innerHTML = `Sign in/Sign up`;
    accountButton.innerHTML = `Not Signed In`;
    avatar.innerHTML = 'account_circle'
    // accountButton.classList.add('trigger')
    // accountButton.addEventListener('click', toggleModalFromDrawer())
  }
});
