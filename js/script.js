// Common Function
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId)
    const inputFieldString = inputField.value;
    const inputFieldNumber = parseFloat(inputFieldString)
    return inputFieldNumber;
}
function getInputText(textId) {
    const textField = document.getElementById(textId)
    const textFieldString = textField.innerText;
    const textFieldNumber = parseFloat(textFieldString)
    return textFieldNumber;
}
// OutPut Field for common Function
function getOutputValue(outputId, value){
    const outputField = document.getElementById(outputId)
    outputField.innerText = value;
}
//Get Triangle Area
document.getElementById('btn-triangle').addEventListener('click', function () {
    const triangleBase = getInputValue('tri-base')
    const triangleHeight = getInputValue('tri-height')
    const triangleArea = 0.5 * triangleBase * triangleHeight;
    const triangleAreaWithComment = 'Triangle Area is :' + triangleArea;
    const outputField = getOutputValue('output-triangle',triangleAreaWithComment)

})

// Get Rectangle Area
document.getElementById('btn-rectangle').addEventListener('click', function () {
    const rectangleWidth = getInputValue('rec-width')
    const rectangleLength = getInputValue('rec-length')
    const rectangleArea = rectangleWidth * rectangleLength;
    const rectangleAreaWithComment = 'Rectangle Area is :' + rectangleArea;
    const outputField = getOutputValue('output-rectangle',rectangleAreaWithComment)
})

// Get Parallelogram Area
document.getElementById('btn-parallelogram').addEventListener('click',function(){
    const parallelogramBase = getInputText('para-base')
    const parallelogramHeight = getInputText('para-height')
    const parallelogramArea = parallelogramBase*parallelogramHeight;
    const parallelogramAreaWithComment = 'Parallelogram Area is :'+ ' ' + parallelogramArea;
    const outputField = getOutputValue('output-parallelogram',parallelogramAreaWithComment)

})
// Get Rhombus Area
document.getElementById('btn-rhombus').addEventListener('click',function(){
    const firstDiagonal = getInputText('first-diagonal')
    const secondDiagonal = getInputText('second-diagonal')
    const rhombusArea =0.5 * firstDiagonal*secondDiagonal;
    const rhombusAreaWithComment =  'Rhombus Area is :'+ ' ' + rhombusArea;
    const outputField = getOutputValue('output-rhombus',rhombusAreaWithComment)
})



