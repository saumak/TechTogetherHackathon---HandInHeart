// (function(){
//   // Initialize Firebase
//
//   var config = {
//     apiKey: "AIzaSyB6zYcOCVxu7YXWDIwyTSu_XYcgBOw-Yc0",
//     authDomain: "techtogether-57573.firebaseapp.com",
//     databaseURL: "https://techtogether-57573.firebaseio.com",
//     projectId: "techtogether-57573",
//     storageBucket: "",
//     messagingSenderId: "663844869629"
//   };
//   firebase.initializeApp(config);
//
//   //initilizing elements
//   const txtEmail = document.getElementById('txtEmail');
//   const txtPassword = document.getElementById('txtPassword');
//   const btnLogin = document.getElementById('btnLogin');
//   const btnLogout = document.getElementById('btnLogout');
//   const btnSignup = document.getElementById('btnSignup');
//
//   //authenticating the firebase
//   btnLogin.addEventListener('click', e=>{
//     const email = txtEmail.value;
//     const pass = txtPassword.value;
//     const auth = firebase.auth();
//
//     //signing in the user
//     const promise = auth.signInWithEmailAndPassword(email, pass);
//     promise.catch(e=>console.log(e.message));
//   });
//
//   //signup of the user
//
//   //authenticating the firebase
//   btnLogin.addEventListener('click', e=>{
//     const email = txtEmail.value;
//     const pass = txtPassword.value;
//     const auth = firebase.auth();
//
//     //signing in the user
//     const promise = auth.createUserWithEmailAndPassword(email, pass);
//     promise.catch(e=>console.log(e.message));
//   });
//
//   //adding real time authentication method
//   firebase.auth().onAuthStateChanged(firebaseUser => {
//     if(firebaseUser){
//       console.log(firebaseUser);
//       btnLogout.classList.remove('hide');
//     }
//     else{
//       console.log('not logged in');
//       btnLogout.classList.remove('hide');
//     }
//   });
//
// }());




firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    location = 'home.html';

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.email;
      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;


    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

function logout(){
  firebase.auth().signOut();
}
