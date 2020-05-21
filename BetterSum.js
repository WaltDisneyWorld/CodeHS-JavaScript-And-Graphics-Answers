function start(){
	var numOne = readInt("Enter a number: ");
	var numTwo = readInt("Enter another number: ");
	
	var sum = 0;
	for(var i = numOne; i <= numTwo; i++){
		sum += i;
	}
	
	println("The sum was " + sum);
	
}