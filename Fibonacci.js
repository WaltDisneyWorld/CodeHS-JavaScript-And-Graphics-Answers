var MAX = 1000;

function start(){
	var x = 0;
	var y = 1;
	
	while (x + y < MAX){
	    println(y);
	    x += y;
	    println(x);
	    y += x;
	}
}