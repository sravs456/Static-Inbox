function validate(){
    console.log("in js");
    var mail= document.getElementById("email").value;
    var pass= document.getElementById("password").value;
    if(mail=="a@gmail.com" && pass=="1234" )
    {
        alert("Successfully Logged In");
        window.location.reload("email.html");
        return false;
    }
    else
    {
        alert("enter right credentials");
    }
}