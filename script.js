// Variables
let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';

// Logics
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        
        // Multiplication Logic
        if (buttonText == '×') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }

        // Division Logic
        if (buttonText == '÷') {
            buttonText = '/';
            screenValue += buttonText;
            screen.value = screenValue;
        }

        // Clear All Logic
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }

        // = Logic
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}