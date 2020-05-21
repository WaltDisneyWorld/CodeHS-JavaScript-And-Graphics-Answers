function start()
{
    var COST_OF_SHIRT = 15; //Constant
    println("How many t-shirts would you like");
	var tshirts = readInt("Num T-shirts: "); //Ask
    println("Your total is: " + COST_OF_SHIRT * tshirts + " dollars."); //Total
}