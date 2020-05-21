function start(){
	for(var i = 0; i < 100; i++){
	    var roll = Randomizer.nextInt(1, 6);
	    println("You rolled " + roll);
	}
}