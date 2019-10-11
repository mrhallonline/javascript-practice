// Build Guest list that has the ability to check if a name is present and send an alert either way.
var name = prompt("Enter your first name.")
var guestList = ["Alisa", "Veronica", "Susan", "Kash", "Quincy", "Addison" ]
if (guestList.includes(name)) { 
    alert("Welcome " + name + "." + "You are on the list!" );
}   else {
    alert("Sorry " + name + " you are not on the list!")
}
