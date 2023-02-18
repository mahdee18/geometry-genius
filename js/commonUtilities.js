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

// for button
function getButtonById(elementId) {
    const areaTotal = document.getElementById(elementId);
    areaTotal.style.display = "block";
    return areaTotal;
}
