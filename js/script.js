// Common Function
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId)
    const inputFieldString = inputField.value;
    const inputFieldNumber = parseFloat(inputFieldString)
    return inputFieldNumber;
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
    const outputField = getOutputValue('output',triangleAreaWithComment)

})

// Get Rectangle Area
document.getElementById('btn-rectangle').addEventListener('click', function () {
    const rectangleWidth = getInputValue('rec-width')
    const rectangleLength = getInputValue('rec-length')
    const rectangleArea = rectangleWidth * rectangleLength;
    const rectangleAreaWithComment = 'Rectangle Area is :' + rectangleArea;
    const outputField = getOutputValue('output',rectangleAreaWithComment)
})




