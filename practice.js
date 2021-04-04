var firebaseConfig = {
    apiKey: "AIzaSyCUUnp2GGSfh4ck0VUY7Q8UsuXVrQjv-Oc",
    authDomain: "kwitter-6f04c.firebaseapp.com",
    databaseURL: "https://kwitter-6f04c-default-rtdb.firebaseio.com",
    projectId: "kwitter-6f04c",
    storageBucket: "kwitter-6f04c.appspot.com",
    messagingSenderId: "609780641956",
    appId: "1:609780641956:web:f8b1f2b60c3fc54e497631"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function addRoom(){
  roomname=document.getElementById("roomname").value  
  firebase.database().ref("/").child(roomname).update({
      STATUS:"MAIN FOLDER CREATED"

  })
  }
  function sendMessage(){
 username=document.getElementById("username").value
 message=document.getElementById("message").value
 firebase.database().ref(roomname).push({
USERNAME: username,
MESSAGE: message,

 })
}
