var dashboardSignin = document.querySelector('.trigger');
var accountButton = document.querySelector('.dashboard-account')

dashboardSignin.addEventListener('click', function () {
  if (checkAuthState()) {
    signOut()
  }
})

accountButton.addEventListener('click', function () {
  if (checkAuthState()) {

  } else {
    toggleModalFromDrawer()
  }
});


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

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

// var user = firebase.auth().currentUser;




function checkAuthState() {
  console.log(getParameterByName('test', window.url))
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
  firebase.auth().signOut().then(function () {
    // console.log('Signed Out');
  }, function (error) {
    console.error('Sign Out Error', error);
  });
}


function accountButtonHandler() {
  console.log('clicked')
}

function writeNewUser(uid, displayName) {
  var newUserKey = firebase.database().ref(`USERS/${uid}`)
  return newUserKey.set({
    displayname: displayName
  });
}

async function checkIfOldUser(uid) {
  var data;
  firebase.database().ref('USERS/' + uid).once('value').then(function (snapshot) {
    // ...
    data = snapshot.val()
    console.log(data)
  });
  return data;
}


firebase.auth().onAuthStateChanged(async function (user) {
  var signInText = document.getElementById('dashboard-signin');
  var accountButton = document.getElementById('dashboard-account')
  var avatar = document.querySelector('.avatar')
  var user = firebase.auth().currentUser;
  // console.log(user.uid) 
  // user.sendEmailVerification().then(function() {
  //   // Email sent.
  // }).catch(function(error) {
  //   // An error happened.
  // });
  if (user) {
    // console.log(user)
    var userRef = firebase.database().ref(`users/${user.uid}`)

    if (!checkIfOldUser(user.uid)) {
      //if account is old
      data = await checkIfOldUser(user.uid)
      console.log('old')
    } else {
      //if account is new
      console.log('new')
      writeNewUser(user.uid, user.displayName)
    }
    var verified = user.emailVerified;

    // User is signed in.
    toggleModalFromDrawer()
    try {
      signInText.innerHTML = `${user.email}`
      accountButton.innerHTML = `${user.displayName}`
      if (user.photoURL) {
        avatar.innerHTML = `<img class="avatar" src="${user.photoURL}">`
      } else {
        avatar.innerHTML = 'account_circle'
      }
    } catch (e) {
      console.log(e)
    }
  } else {
    // No user is signed in.
    signInText.innerHTML = `Not signed in`;
    accountButton.innerHTML = `Sign in/Sign Up`;
    avatar.innerHTML = 'account_circle'
    // accountButton.classList.add('trigger')
    // accountButton.addEventListener('click', toggleModalFromDrawer())
  }
});

console.log(getParameterByName('test', window.url))