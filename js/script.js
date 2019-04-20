    let inputElements = document.querySelectorAll('input');
    let inputScreen = document.getElementById("ipScreen");
    let equalButton = document.getElementById("equalTo");
    let firstNumber = 0;
     
    function powerOff() {
        inputScreen.value = "";
    }
    function powerOn () {
        inputScreen.value = 0;
    } 

    function power() {
        if (inputScreen.value === "") {
             inputScreen.value = "0";
        }
        
        else if (inputScreen.value === "0" || inputScreen.value >= "0") {
            inputScreen.value = "";
        }
    
        else if (inputScreen.value <= "0") {
            inputScreen.value = "";
        }

        else {
            inputScreen.value = "";
        }
    }
        
    inputElements[1].addEventListener("click", power);
    
    function disableKeyboard() {
        document.onkeydown = function (e) {
            return false;
        }
    }

    inputScreen.addEventListener("keydown", disableKeyboard)

    function defaultOn() {
        if (inputScreen.value == "") {
           return powerOff();       
        }

        else if (inputScreen.value >= "0") {
            return powerOn();
        }

        else if (inputScreen.value <= "0") {
            return powerOn();
        }

        else {
            return powerOn();
        }
    }
    inputElements[2].addEventListener("click", defaultOn);

    
    function clearError () {
        if (inputScreen.value === "0") {
            return powerOn();
        }
        screenNumbers = inputScreen.value;
        numbersToString = screenNumbers.toString();
        lengthOfNumbers = numbersToString.length;
        console.log(lengthOfNumbers);
            
        if (lengthOfNumbers === 1) {
                return powerOn()
            } else {
                newNumbers = numbersToString.slice(0, -1);
                inputScreen.value = newNumbers;
            }       
    }
    inputElements[3].addEventListener("click", clearError);
     
    function show (num) {
        num.preventDefault
        console.log(num.target.value)   
        let shownNumbers;
        
        if (inputScreen.value === "") {
            return powerOff();
        }    

        else if (equalClicked()) {
            inputScreen.value = '0';
        }

         else if (inputScreen.value === '0') {
            inputScreen.value = "";            
            inputScreen.value = num.target.value;
         }
         else if (inputScreen.value !== '0') {
            inputScreen.value += num.target.value;
         }
    }
    inputElements[4].addEventListener("click", show);
    inputElements[5].addEventListener("click", show);
    inputElements[6].addEventListener("click", show);
    inputElements[8].addEventListener("click", show);
    inputElements[9].addEventListener("click", show);
    inputElements[10].addEventListener("click", show)
    inputElements[12].addEventListener("click", show)
    inputElements[13].addEventListener("click", show);
    inputElements[14].addEventListener("click", show);
    inputElements[16].addEventListener("click", show);

    function equalClicked() {
        if (document.getElementById('equalTo').onclick) {
             clicked = true;
        }
    }

    function plusZero(char) {
        if (equalClicked()) {
            inputScreen.value = '0';
            inputScreen.value += char.target.value;
        }
        else {
        inputScreen.value += char.target.value;
        }
    }
    inputElements[7].addEventListener("click", plusZero);
    inputElements[11].addEventListener("click", plusZero);
    inputElements[15].addEventListener("click", plusZero);
    inputElements[17].addEventListener("click", plusZero);
    inputElements[18].addEventListener("click", plusZero);

    function storeNumber (){
        firstNumber = inputScreen.value;
        console.log(firstNumber);
        return inputScreen.value = " ";
    }

    inputElements[7].addEventListener("click", storeNumber);
    inputElements[11].addEventListener("click", storeNumber);
    inputElements[15].addEventListener("click", storeNumber);
    inputElements[18].addEventListener("click", storeNumber);
   
    
    function equal () {
        if(inputScreen.value === "") {
            powerOff();
        }
        console.log(firstNumber);
        secondNumber = inputScreen.value;
        console.log (secondNumber);
        firstNumber = firstNumber.toString();
        secondNumber = secondNumber.toString();
        if (firstNumber.includes("/")) {
            firstNumber = parseFloat(firstNumber);
            console.log(firstNumber);
            secondNumber = parseFloat(secondNumber);
            console.log(secondNumber)
            division =  firstNumber / secondNumber;
            return inputScreen.value = division;
        }
        else if (firstNumber.includes("*")){
            firstNumber = parseFloat(firstNumber);
            secondNumber = parseFloat(secondNumber);
            multiplication =  firstNumber * secondNumber;
            return inputScreen.value = multiplication;
        }
        else if (firstNumber.includes("+")) {     
            firstNumber = parseFloat(firstNumber);
            secondNumber = parseFloat(secondNumber);
            addition =  firstNumber + secondNumber;
            return inputScreen.value = addition;
        }
        else if (firstNumber.includes("-")) {
            firstNumber = parseFloat(firstNumber);
            secondNumber = parseFloat(secondNumber);
            subtraction =  firstNumber - secondNumber;
            return inputScreen.value = subtraction;
        }
    }   
    equalButton.addEventListener("click", equal);