var SECRET = "abc123";

function start()
{
    var guess;
    while(guess != SECRET){
        var guess = readLine("What is the password? ");
        
        if(guess == SECRET){
            println("Password correct");
            break;
        }
        else{
            println("Sorry, that password does not match.");
        }
        
    }
	
}