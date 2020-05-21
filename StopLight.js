function start(){
    var str = readLine("Color? ");
    if(str == "red"){
	    println("Red light: you shoud stop.");
	}
    else if(str == "green"){
        println("Green light: Go!");
    }
    else if(str == "yellow"){
        println("Slow down!");
    }
}