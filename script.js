var displayA = document.getElementById("displayA")
var displayOP = document.getElementById("displayOP")
var displayB = document.getElementById("displayB")
var displayResult = document.getElementById("displayResult")
var display = document.getElementById("display")

var a = null
var b = null
var c = null
var op = null
var changeOP = true
var decimalA = false
var decimalB = false

displayA.value = null
displayB.value = null
display.value = null
displayOP.value = null
displayResult.value = null







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
        changeOP = true
    }
}

function chainOperations() {

    if(c != null){
        displayA.value = c
        displayB.value = null
        op = null
        c = null
        changeOP = true
        decimalB = false
    }

    else if((changeOP == false) && (op == "+" || op == "-" || op == "x" || op == "÷")){
        buttonEqual()
        displayA.value = c
        displayB.value = null
        op = null
        c = null
        changeOP = true
        decimalB = false

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
    changeOP = true
    decimalA =false
    decimalB = false
}

function decimal(){
    if(decimalB == false && (op == "+" || op == "-" || op == "x" || op == "÷")){
        displayB.value += "."
        display.value = `${displayA.value}${op}${displayB.value}`
        decimalB = true
    }

    else if(decimalA == false && (op != "+" || op != "-" || op != "x" || op != "÷")){
        displayA.value += "."
        display.value = `${displayA.value}`
        decimalA = true
    }
}

function buttonZero(){
    if(op == "+" || op == "-" || op == "x" || op == "÷"){
        displayB.value += 0
        display.value = `${displayA.value}${op}${displayB.value}`
        changeOP = false

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
        changeOP = false

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
        changeOP = false
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
        changeOP = false
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
        changeOP = false
        
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
        changeOP = false
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
        changeOP = false
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
        changeOP = false
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
        changeOP = false
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
        changeOP = false
    }

    else{
        displayA.value += 9
        display.value = `${displayA.value}`
    }

}
function buttonPlus(){
    op = "+"
    displayOP.value = `${op}`
    display.value = `${displayA.value}${op}`
    
}

function buttonMinus(){
    op = "-"
    displayOP.value = `${op}`
    display.value = `${displayA.value}${op}`
}

function buttonX(){
    op = "x"

    displayOP.value = `${op}`
    display.value = `${displayA.value}${op}`

}

function division(){
    op = "÷"

    displayOP.value = `${op}`
    display.value = `${displayA.value}${op}`
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

function plus_minus(){
    if(c != null){
        c *= -1
        display.value = `${c}`
    }
    
    else if(op == "+" || op == "-" || op == "x" || op == "÷"){
        displayB.value *= -1
        display.value = `${displayA.value}${op}${displayB.value}`
    }

    else{
        displayA.value *= -1
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


}

function divideByZeroException(){
    if(b == 0){
        displayResult.value = "Error"
        display.value = "Error"
    }
}
