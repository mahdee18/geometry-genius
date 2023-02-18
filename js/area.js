
//Get Triangle Area
document.getElementById('btn-triangle').addEventListener('click', function () {
    const triangleBase = getInputValue('tri-base')
    const triangleHeight = getInputValue('tri-height')
    const triangleArea = 0.5 * triangleBase * triangleHeight;

    // For Validation
    if (isNaN(triangleBase) || isNaN(triangleHeight) || triangleBase < 0 || triangleHeight < 0) {
        alert("Please input valid numbers");
        return;
    }
    const triangleAreaOutput = document.getElementById('triangle-area-output')
    triangleAreaOutput.innerText = '0';
    const totalTriangleArea = triangleArea + triangleAreaOutput.innerText;
    triangleAreaOutput.innerText = totalTriangleArea;
    getButtonById('triangle-area-total')

});


// Get Rectangle Area
document.getElementById('btn-rectangle').addEventListener('click', function () {
    const rectangleWidth = getInputValue('rec-width')
    const rectangleLength = getInputValue('rec-length')
    const rectangleArea = rectangleWidth * rectangleLength;
    const rectangleAreaWithComment = 'Rectangle Area is :' + rectangleArea;
    // For Validation
    if (isNaN(rectangleWidth) || isNaN(rectangleLength) || rectangleWidth < 0 || rectangleLength < 0) {
        alert("Please input valid numbers");
        return;
    }
    const rectangleAreaOutput = document.getElementById('rectangle-area-output')
    rectangleAreaOutput.innerText = '0';
    const totalRectangleArea = rectangleArea + rectangleAreaOutput.innerText;
    rectangleAreaOutput.innerText = totalRectangleArea;
    getButtonById('rectangle-area-total')
})

// Get Parallelogram Area
document.getElementById('btn-parallelogram').addEventListener('click', function () {
    const parallelogramBase = getInputText('para-base')
    const parallelogramHeight = getInputText('para-height')
    const parallelogramArea = parallelogramBase * parallelogramHeight;

    const parallelogramAreaOutput = document.getElementById('parallelogram-area-output')
    parallelogramAreaOutput.innerText = '0';
    const totalParallelogramArea = parallelogramArea + parallelogramAreaOutput.innerText;
    parallelogramAreaOutput.innerText = totalParallelogramArea;
    getButtonById('parallelogram-area-total')

})

// Get Rhombus Area
document.getElementById('btn-rhombus').addEventListener('click', function () {
    const firstDiagonal = getInputText('first-diagonal')
    const secondDiagonal = getInputText('second-diagonal')
    const rhombusArea = 0.5 * firstDiagonal * secondDiagonal;

    const rhombusAreaOutput = document.getElementById('rhombus-area-output')
    rhombusAreaOutput.innerText = '0';
    const totalRhombusArea = rhombusArea + rhombusAreaOutput.innerText;
    rhombusAreaOutput.innerText = totalRhombusArea;
    getButtonById('rhombus-area-total')
})

// Get pentagon Area
document.getElementById('btn-pentagon').addEventListener('click', function () {
    const pentagonPerimeter = getInputText('penta-perimeter')
    const pentagonApothem = getInputText('penta-apothem')
    const pentagonArea = 0.5 * pentagonPerimeter * pentagonApothem;

    const pentagonAreaOutput = document.getElementById('pentagon-area-output')
    pentagonAreaOutput.innerText = '0';
    const totalPentagonArea = pentagonArea + pentagonAreaOutput.innerText;
    pentagonAreaOutput.innerText = totalPentagonArea;
    getButtonById('pentagon-area-total')
})
// Get Ellipse Area
document.getElementById('btn-ellipse').addEventListener('click', function () {
    const axisA = getInputText('axis-a')
    const axisB = getInputText('axis-b')
    const PIE = 3.1416
    const ellipseArea = PIE * axisA * axisB;

    const ellipseAreaOutput = document.getElementById('ellipse-area-output')
    ellipseAreaOutput.innerText = '0';
    const totalEllipseArea = ellipseArea + ellipseAreaOutput.innerText;
    ellipseAreaOutput.innerText = totalEllipseArea;
    getButtonById('ellipse-area-total')
})


