const url1 = 'oddsnodejs1.com'
const url2 = 'oddsnodejs2.com'
const connect = true;

function getConnection(url) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (connect) {
                resolve("new" + url)
            } else {
                reject("connection fail!")
            }
            console.log("connect " + url)
        }, 3000);
    })
}

function getConnection2(url) {
    return console.log(`connect ${url} complete`)
}

async function connetion() {
    try {
        const result = await getConnection(url1)
        getConnection2(result)
    } catch (result) {
        console.log("Error " + result);
    } finally {
        console.log("End connection");
    }
}

connetion()

// const connect = true;
// connect oddsnodejs1.com
// connect newoddsnodejs1.com complete
// End connection

// const connect = false;
// connect oddsnodejs1.com
// Error connection fail!
// End connection