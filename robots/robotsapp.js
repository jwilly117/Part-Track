<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.2.9/firebase.js"></script>
  

// Here we will try to create an interaction between pages
  //  Here we have the javascript test for a decreasing progress bar
    // ================================

    var firebaseConfig = {
        apiKey: "AIzaSyCNgQru6L-VJT5C9y8Cl47GtVH2DNmo2Yk",
        authDomain: "part-track-demo.firebaseapp.com",
        projectId: "part-track-demo",
        storageBucket: "part-track-demo.appspot.com",
        messagingSenderId: "497244549101",
        appId: "1:497244549101:web:afb5f178b7f25ff2dc81e4"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
    
    //  ===================================================================
    // Here we capture the counters
    var database = firebase.database();



$("#helpButton").on("click", function(){
    console.log("A robot has requested help");
    alert("Hello");

    database.ref("/help").set({
        R1needsHelp: true
    })
})

