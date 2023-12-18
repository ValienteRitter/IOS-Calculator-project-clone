var displayA = document.getElementById("displayA")
var displayOP = document.getElementById("displayOP")
var displayB = document.getElementById("displayB")
var displayResult = document.getElementById("displayResult")
var display = document.getElementById("display")

var a = null
var b = null
var c = null
var op = null
displayA.value = null
displayB.value = null
display.value = null
displayOP.value = null
displayResult.value = null



console.log(displayA.value)
console.log(op)
console.log(displayB.value)
console.log(display.value)



function resetAfterResult(){
    if(c == null){

    }

    else{
        display.value = null
        displayA.value = null
        displayOP.value = null
        displayB.value = null
        displayResult.value = null
        c = null
        op = null
        a = null
        b = null
    }
}

function buttonC(){
    display.value = null
    displayA.value = null
    displayOP.value = null
    displayB.value = null
    displayResult.value = null
    c =null
    op =null
    a = null
    b = null
}


function buttonZero(){
    if(op == "+" || op == "-" || op == "x" || op == "÷"){
        displayB.value += 0
        display.value = `${displayA.value}${op}${displayB.value}`

    }

    else{
        displayA.value += 0
        display.value = `${displayA.value}`
    }
}

function button1(){

    if(op == "+" || op == "-" || op == "x" || op == "÷"){
        displayB.value += 1
        display.value = `${displayA.value}${op}${displayB.value}`

    }

    else{
        displayA.value += "1"
        display.value = `${displayA.value}`
    }

}

function button2(){

    if(op == "+" || op == "-" || op == "x" || op == "÷"){
        displayB.value += 2
        display.value = `${displayA.value}${op}${displayB.value}`
    }

    else{
        displayA.value += 2
        display.value = `${displayA.value}`
        
    }
}

function button3(){

    if(op == "+" || op == "-" || op == "x" || op == "÷"){
        displayB.value += 3
        display.value = `${displayA.value}${op}${displayB.value}`
    }

    else{
        displayA.value += 3
        display.value = `${displayA.value}`
    }
}

function button4(){

    if(op == "+" || op == "-" || op == "x" || op == "÷"){
        displayB.value += 4
        display.value = `${displayA.value}${op}${displayB.value}`
        
    }

    else{
        displayA.value += 4
        display.value = `${displayA.value}`
    }
}

function button5(){

    if(op == "+" || op == "-" || op == "x" || op == "÷"){
        displayB.value += 5
        display.value = `${displayA.value}${op}${displayB.value}`
    }

    else{
        displayA.value += 5
        display.value = `${displayA.value}`
    }

}

function button6(){

    if(op == "+" || op == "-" || op == "x" || op == "÷"){
        displayB.value += 6
        display.value = `${displayA.value}${op}${displayB.value}`
    }

    else{
        displayA.value += 6
        display.value = `${displayA.value}`
    }

}

function button7(){

    if(op == "+" || op == "-" || op == "x" || op == "÷"){
        displayB.value += 7
        display.value = `${displayA.value}${op}${displayB.value}`
    }

    else{
        displayA.value += 7
        display.value = `${displayA.value}`
    }

}

function button8(){

    if(op == "+" || op == "-" || op == "x" || op == "÷"){
        displayB.value += 8
        display.value = `${displayA.value}${op}${displayB.value}`
    }

    else{
        displayA.value += 8
        display.value = `${displayA.value}`
    }

}

function button9(){

    if(op == "+" || op == "-" || op == "x" || op == "÷"){
        displayB.value +=9
        display.value = `${displayA.value}${op}${displayB.value}`
    }

    else{
        displayA.value += 9
        display.value = `${displayA.value}`
    }

}
function buttonPlus(){
    op = "+"
    displayOP.value += "+"
    display.value += "+"
    
}

function buttonMinus(){
    op = "-"
    displayOP.value += "-"
    display.value += "-"
}

function buttonX(){
    op = "x"

    displayOP.value += "x"
    display.value += "x"

}

function division(){
    op = "÷"

    displayOP.value += "÷"
    display.value += "÷"
}

function percentage(){
    if(op == "+" || op == "-" || op == "x" || op == "÷"){
        displayB.value /= 100
        display.value = `${displayA.value}${op}${displayB.value}`
    }

    else{
        displayA.value /= 100
        display.value = `${displayA.value}`
        
    }
}

function buttonEqual(){
    a = parseFloat(displayA.value)
    b = parseFloat(displayB.value)

    if(op == "+"){
        c = a + b
    }

    else if(op == "-"){
        c = a - b
    }

    else if(op == "x"){
        c = a * b
    }

    else if(op == "÷"){
        c = a / b
    }

    displayResult.value = c
    display.value = c
    console.log(c)
    console.log(a)
    console.log(b)
    console.log(displayA.value)
    console.log(displayOP.value)
    console.log(displayB.value)

}

function divideByZeroException(){
    if(b == 0){
        displayResult.value = "Error"
        display.value = "Error"
    }
}