// This function checks if the string is a palindrome
function isPalindrome(str1) {
    let cleanedStr = removeSpaces(str1);
    let reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}

// Function to remove spaces from a string "copied from internet"
function removeSpaces(str) {
    return str.replace(/\s+/g, '');
}

// This function is triggered when the button is clicked
function check() {
    let userInput = document.getElementById("pal").value;

    // If the user does not provide any input, return
    if (!userInput) {
        alert("Please enter a word!");
        return;
    }

    // Check if the string is a palindrome and update the page accordingly
    if (isPalindrome(userInput.toLowerCase())) {
       document.getElementById("result").innerHTML = "This is a palindrome";
       playSound('success')
    } else {
        document.getElementById("result").innerHTML = "This is NOT a palindrome";
        playSound('error')
    }

    // Ask the user if they wish to continue I tied to use this comand but is coming in too earli and as an alert so I don't like it.
    //let shouldContinue = confirm("Do you want to enter another word?");
   // if (shouldContinue) {
        document.getElementById("Pal").value = ""; // Clear the input
    //}
}
//This Function will add sound when is corrent or wrong the answer
function playSound(type) {
    const audio = new Audio();
    if (type === 'success') {
      audio.src = 'Success.mp3';  // Replace with your success sound file
    } else if (type === 'error') {
      audio.src = 'wrong.mp3';  // Replace with your error sound file
    }
  
    // Play the audio
    audio.play();
  }