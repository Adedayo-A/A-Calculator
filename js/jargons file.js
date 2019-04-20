screen = document.getElementById("form");
       newValue = calc.screen.value.split(/[+]/g)
       console.log(newValue)
    newValue.

    if(calc.screen.value.includes("+")) {
       indexing  = calc.screen.value.indexOf("+") + 1;
       indexing2 = calc.screen.value.indexOf("+") - 1;
    }
    arg1 = calc.screen.value.charAt(indexing);
    console.log(arg1)
    arg2 = calc.screen.value.charAt(indexing2);
    console.log(arg2)
    if (arg1||arg2.includes(".")) {
        arg1 = parseFloat(arg1)
        arg2 = parseFloat(arg2)
    } else {
        arg1 = parseInt(arg1)
        arg2 = parseInt(arg2)
    }
    var addition = arg1 + arg2;
    console.log(addition);
    function subtract (arg1, arg2){
        var subtraction = arg1 - arg2;
        return subtraction
    }

    function multiply (arg1, arg2){
        var multiplication = arg1 * arg2;
        return multiplication;
    }

    function divide (arg1, arg2){
        var division = arg1 / arg2;
        return division;
    }

    if (calc.screen.value.includes("/")){
            divide();
        }

        if (calc.screen.value.includes("x")) {
            multiply();
        }

        if (calc.screen.value.includes("+")) {
            calc.screen.value = add();
        }
        if(calc.screen.value.includes("-")) {
            subtract();
        }

        calc.addbutton.style.display = none;
        let displaySetting = calc.addbutton.style.display;
        // for (i = 0; i < figures.length; i++) {
        //     if (figures.includes('/') || figures.includes('*') || figures.includes('+') ||  figures.includes('-'))  {
        //     figures += hidden.value.style.display = none + figures.charAt(i)
            }
        }
        console.log (figures)
        let figures = calc.screen.value;
        let hidden = document.getElementsByClassName('hidden');
        
        function divide (){
            storeNumber()
            console.log (firstNumber);
        }
    
        function multiply (){
            storeNumber()
            console.log (firstNumber);
        }
    
        function add (){
            storeNumber()
            console.log (firstNumber);
        }
    
        function subtract (){
            storeNumber()
            console.log (firstNumber);
        }

        function blank () {
            calc.screen.value=0;
        }

        
    show = nam => if (clearscreen()) {
        calc.screen.value += nam;
    }  
    onMode = 0;
    offMode = null;