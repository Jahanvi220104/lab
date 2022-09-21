const readFile = require("./readFile")

readFile.myreadFile(".data/albums.json").then((albums) => {
console.log(data)
}).catch( (err) => {
    console.log("ERROR: \n"+ err)
})