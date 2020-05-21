function start(){
	var pointsPerGame = readInt("Points per game: ");
	var reboundsPerGame = readInt("Rebounds per game: ");
	var assistsPerGame = readInt("Assists per game: ");
    var star = pointsPerGame + reboundsPerGame + assistsPerGame;
	///
    
	if(pointsPerGame >= 10 && reboundsPerGame >= 10 && assistsPerGame >=10){
	    println("true");
	} ///If 10-10-10
	
	if(pointsPerGame >= 25){
	    println("true");
	} ///If ONLY 25 points
	
	else{
	    println("false");
	} ///Invalid.
	
}