function start(){
    while(true){
        var roll1 = Randomizer.nextInt(1, 6);
        var roll2 = Randomizer.nextInt(1, 6);
        println(roll1 + ", " + roll2);
        if(roll1 == 1 && roll2 == 1){
            break; 
        }
    }
	
}