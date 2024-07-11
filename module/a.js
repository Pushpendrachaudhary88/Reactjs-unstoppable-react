
console.log("File A is starting")

let x = 100 

setTimeout(function(){console.log("Where will I be displayed")}, 1000)

function hello(){
    console.log("Hello", x)
}

console.log("File A is done")

export default hello

