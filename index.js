console.log("---Synchronous---")
console.log("Start")
console.log("Downloading...")
console.log("End")

console.log("---Asynchronous---")
console.log("Start")
setTimeout(() => {
    console.log("Downloading...")
}, 2000)
console.log("End")

