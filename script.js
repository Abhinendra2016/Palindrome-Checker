// Function to check if a string is a palindrome
function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

document.getElementById('checkPalindrome').addEventListener('click', function () {
    const inputText = document.getElementById('inputtext').value;
    const resultDiv = document.getElementById('result');
    
    if (isPalindrome(inputText)) {
        resultDiv.innerText = 'It is a palindrome!';
    } else {
        resultDiv.innerText = 'It is not a palindrome.';
    }
});
