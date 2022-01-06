-- // function validate(){
-- //     var mail= document.getElementById("email").value;
-- //     var pass= document.getElementById("password").value;
-- //     if(mail=="a@gmail.com" && pass=="1234" )
-- //     {
      
-- //         window.location("email.html");
-- //         return false;
-- //     }
-- //     else
-- //     {
-- //         alert("enter right credentials");
-- //     }
-- // }

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Test",
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});