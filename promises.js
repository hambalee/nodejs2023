const connect = true
const url = 'oddsnodejs.com'

function getConnection(url) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (connect) {
                resolve(`connect ${url} complete`)
            } else {
                reject("connection fail!")
            }
        }, 2000);
    })
}

getConnection(url).then( (result) => {
    console.log('sucess '+result);
}).catch( (result) => {
    console.log('fail '+result);
}).finally( () => {
    console.log('end download');
})