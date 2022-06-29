function addRoom(){
    user_room=document.getElementById("user_room").value;
    localStorage.setItem("user_room",user_room);
    window.location="kwitter_room.html";
    
}
const firebaseConfig = {
    apiKey: "AIzaSyB9VyjyK6SK4AvhJYLv8K5v8Dnl85WeGZ0",
    authDomain: "p-kwitter-app.firebaseapp.com",
    projectId: "p-kwitter-app",
    storageBucket: "p-kwitter-app.appspot.com",
    messagingSenderId: "656719846186",
    appId: "1:656719846186:web:37901ea50ac9ab37631c53"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function addroom(){
    user_room=document.getElementById("user_room").value;
firebase.database().ref("/").child(user_room).update({purpose:"adding room"});
}