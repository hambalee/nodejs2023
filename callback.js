const fileName1 = "lisa.jpg"
const fileName2 = "janny.jpg"
const fileName3 = "ink.jpg"

//Download file 3s => display file name
function download(fileName, callback) {
    console.log(fileName + ' is downloading...');
    setTimeout(() => {
        callback(fileName)
    }, 3000);
}

function display(result) {
    console.log(result + ' is downloaded');
}

download(fileName1, () => {
    display(fileName1)
    download(fileName2, () => {
        display(fileName2)
        download(fileName3, () => {
            display(fileName3)
        })
    })
})

// result
// lisa.jpg is downloading...
// lisa.jpg is downloaded
// janny.jpg is downloading...
// janny.jpg is downloaded
// ink.jpg is downloading...
// ink.jpg is downloaded