function main() {
  var lightningTime = readInt("How long has it been since there was a lightning flash (min)? (Enter -1 if there has not been any lightning today): ");
  var clouds = readBoolean("Are there clouds that are 4,500 feet thick or greater within the planned flight path? (Enter true for yes, false for no): ");
  var wind = readInt("What is the wind speed (in knots)? ");
  var precipitation = readBoolean("Is there any precipitation at the launch pad or within the flight path? (Enter true for yes, false for no): ");
  
  if (lightningTime <= 30 || clouds || wind > 30 || precipitation) {
    console.log("Postpone the launch due to weather conditions.");
  } else {
    console.log("You are go for launch!");
  }
}

main();
