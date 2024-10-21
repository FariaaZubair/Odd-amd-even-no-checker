function checkEvenOdd() {
    const userInput = document.getElementById('numberInput').value;
    const resultDiv = document.getElementById('result');

    if (userInput === "") {
        resultDiv.textContent = "Please enter a number.";
        return;
    }

    const number = parseInt(userInput, 10);

    if (number % 2 === 0) {
        resultDiv.textContent = "This is an even number.";
    } else {
        resultDiv.textContent = "This is an odd number.";
    }
}
