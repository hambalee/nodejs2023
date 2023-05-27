//Download file 3s => display file name
function download(callback) {
    console.log('downloading...');
    const filename = 'document.docx'
    setTimeout(() => {
        callback(filename)
    }, 3000);
}

function displayFileName(result) {
    console.log('filename: ' + result);
}

download(displayFileName)