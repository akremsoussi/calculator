const display = document.getElementById("text-field");

function appendToDisplay(input){
    if(display.value == "Error"){
        reset();
        display.value += input;
    } 
    else{
        display.value += input;
    }
    
}

function reset(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch{
        display.value = "Error";
    }
}