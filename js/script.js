// Common Function
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId)
    const inputFieldString = inputField.value;
    const inputFieldNumber = parseFloat(inputFieldString)
    return inputFieldNumber;
}

//Get Triangle Area
document.getElementById('btn-triangle').addEventListener('click', function () {
    const triangleBase = getInputValue('tri-base')
    const triangleHeight = getInputValue('tri-height')
    const triangleArea = 0.5 * triangleBase * triangleHeight;
    const triangleAreaWithComment = 'The Triangle Area is :'+triangleArea;
    const outputField = document.getElementById('output')
    outputField.innerText = triangleAreaWithComment;
}) 





