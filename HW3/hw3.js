// hw3.js
// CIS444
// Daniel Blaine Martinez

// function to calculate fibonacci using recursion
function fibonacci(num) 
{
    if(num < 2) 
    {
        return num;
    }

    else 
    {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}

// take nth term input from the user
var nTh = prompt("Enter the number of terms:");

// if user enters a negative # or 0
if(nTh <= 0) 
{
    document.write("Enter a positive integer.");
}

else 
{
	// open the table
	document.write("<table>");

	// display header
	document.write("<h1> Fibonacci Numbers </h1>");

	// open table with rows and columns
	document.write("<tr>", "<th> <h2>N Term</h2> </th>", "<th> <h2>Fibonacci</h2> </th>");

	// display data
    for(var i = 0; i < nTh; i++) 
    {
    	// write table row and cell tags and place the number value in the cell  
		document.write("<tr>", "<td>");
		document.write(i);
		
		// write closing cell tag for i and opening cell tag for Fib numbers  
		document.write("</td>");
		document.write("<td>");

        document.write(fibonacci(i));
        document.write("</td>","</tr>");
    }

    // close the table
    document.write("</tr>", "</table>");
}