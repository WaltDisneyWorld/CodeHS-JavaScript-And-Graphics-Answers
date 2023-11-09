// Function to draw the correct screen
function drawCorrectScreen() {
  let correctImage = new WebImage("https://codehs.com/uploads/97afdabd4daa52727bcf38bb53d0d7bf");
  correctImage.setPosition(100, 100);
  add(correctImage);

  let text = new Text("Correct!");
  text.setPosition(250, 200);
  add(text);
}

// Function to draw the incorrect screen
function drawIncorrectScreen() {
  let incorrectImage = new WebImage("https://codehs.com/uploads/b1d0c18ddffdff2e7be946811077ddc1");
  incorrectImage.setPosition(100, 100);
  add(incorrectImage);

  let text = new Text("Incorrect!");
  text.setPosition(250, 200);
  add(text);
}

function main() {
// Quiz question
    let question = "What is the capital of France?  ";
    let correctAnswer = "paris";

    // Get user's answer
    let userAnswer = readLine(question);

    // Check if the answer is correct
    if (userAnswer == correctAnswer) {
        drawCorrectScreen();
    } else {
        drawIncorrectScreen();
    }
}

main();
