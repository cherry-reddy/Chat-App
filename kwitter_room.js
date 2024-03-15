var firebaseConfig = {
  apiKey: "AIzaSyB3Hmv-6c6PLqlGDxNYpY3fR_3tRpbR3Ls",
  authDomain: "chat-app-69be4.firebaseapp.com",
  databaseURL: "https://chat-app-69be4-default-rtdb.firebaseio.com",
  projectId: "chat-app-69be4",
  storageBucket: "chat-app-69be4.appspot.com",
  messagingSenderId: "899172882345",
  appId: "1:899172882345:web:d391a49744f66ee5d2d6b8"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }