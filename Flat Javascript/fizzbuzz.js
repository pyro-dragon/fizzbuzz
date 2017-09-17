// Write a class with a method that takes 2 integers between 1 and 100.
// Loop over the integers.
// Write out each integer.
// If the integer is divisible by 3 also print out “fizz”
// If the integer is divisible by 5 also print out “buzz”

class FizzBuzz
{
	constructor()
    {
        this.resultsString = "";
    }

    get results()
    {
        document.getElementById('results').innerHTML = resultsString;

        return resultsString;
    }

	calculateFizz(val)
	{
		if(val % 3)
		{
			return false;
		}

		return true;
	}

	calculateBuzz(val)
	{
		if(val % 5)
		{
			return false;
		}

		return true;
	}

	calculateFizzBuzz(val1, val2)
	{
		var highest;		    // The highest of the two supplied integers
		var outputString = "";	// The function output, to be constructed

		// Check for types and correct arguments
		if(!Number.isInteger(val1) || !Number.isInteger(val2))
		{
			console.log("Error, function requires two integers.");
			return false;
		}

		// Check argument values
		if ((val1 < 1 || val1 > 100) ||
		    (val2 < 1 || val2 > 100))
		{
			console.log("Input integers must be greater than 1 and less than 100");
			return false;
		}

		// Work out the highest
		if((val1 - val2) > 0)
		{
			highest = val1;
		}
		else
		{
			highest = val2;	// In the case of them being the same size it doesn't matter which is assigned highest
		}

		for(var i = 1; i <= highest; i++)
		{
			var outputStringLine = "";
			var fizzBuzz = (this.calculateFizz(i)? "Fizz" : "") + (this.calculateBuzz(i)? "Buzz" : "");

			if(val1 >= i)
			{
				outputStringLine += "First value: " + i + "   ";
			}


			if(val2 >= i)
			{
				outputStringLine += "Second value: " + i;
			}

			outputStringLine += " " + fizzBuzz;

			console.log(outputStringLine);

			outputString += outputStringLine + "<br />";
		}

        this.resultsString = outputString;

        var element = document.getElementById('results');
        if(element !== null)
        {
            element.innerHTML = this.resultsString;
        }

		return outputString;
	}
}

const processor = new FizzBuzz();
