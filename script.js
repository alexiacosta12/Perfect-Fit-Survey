// Create a listener for clicks on the 'start the quiz' button on the front page. 
document.getElementById("beginquiz").addEventListener("click", startQuiz);

// When the button is clicked the 'intro' div is hidden and the first question div is displayed
function startQuiz () {
    document.getElementById("intro").style.display = "none";
    document.getElementById("q1").style.display = "block";
}


// Get all of the .buttons elements
var buttons = document.querySelectorAll(".button");
// Add an onclick event listener to every element with a class of .buttons
for (var i = 0 ; i < buttons.length ; i++) {
    // When an element with .buttons is clicked, run the function called buttonClicked
    buttons[i].onclick = buttonClicked;
    }

// Define what buttonClicked does
function buttonClicked(e) {
    var target = e.target; // 1. `this` is parent, need target
    console.log(target);
    // Get the current element's data-score value
    var selectedType = target.dataset.score;   // 2. score is the value
    // Increase the selected answer's 'type' by 1
    console.log(selectedType);
    answerData[selectedType]++;  // 4. after change of structure
    // Hide the current question div
    this.parentElement.style.display = "none";
    // Work out what the next question div is
    var nextQuestion = this.parentElement.dataset.next;
    // Display the next question element
    console.log(nextQuestion);
    document.getElementById(nextQuestion).style.display = "block"; // no hash!
}