function start()
{
	var diceOne = readInt("Dice 1: ");
	var diceTwo = readInt("Dice 2: ");
	var rolledDoubles = diceOne == diceTwo;
	
	///
	
	if(rolledDoubles){
	    println("true");
	}
	///
	
	if(!rolledDoubles){
	    println("false");
	}

}