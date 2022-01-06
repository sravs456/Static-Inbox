function validate(){
    var id= document.getElementById("name").value;
    var pass= document.getElementById("password").value;
    if(id=="sravani" && pass=="1234" )
    {
      
        window.location("email.html");
        
    }
    else
    {
        alert("enter right credentials");
    }
}