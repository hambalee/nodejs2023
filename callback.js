function calculate(x, y, callback) {
    console.log('processing...');
    setTimeout(() => {
        const sum = x + y
        callback(sum)
    }, 2000);
}

function display(result) {
    console.log('sum=' + result);
}

const result = calculate(100, 500, display)
// display(result)