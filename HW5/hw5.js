// hw5.js
// Display a message when the mouse button is pressed,
// no matter where it is on the screen

// The event handler function to display the message
function displayIt(evt) 
{
	var dom = document.getElementById("myPic"); 

	//Position left at horizontal axis of mouse 
	dom.style.left = (evt.clientX - 190) + "px"; 

	//Position top at vertial axis at of mouse 
	dom.style.top = (evt.clientY - 350) + "px"; 
	dom.style.visibility = "visible";
}

// ****************************************************
// The event handler function to hide the message
function hideIt() 
{
	document.getElementById("myPic").style.visibility = "hidden";
}