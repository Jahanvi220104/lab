
const fs = require("fs")

let albums = []

module.exports.myreadFile = (path)=>
{

    return new Promise((resolve, reject) =>
    {
    fs.readFile("./data/albums.json", 'utf8', function(err, data)
    {
            if(err) {
                console.log("oops error!\n"+err)
                reject(err)
            }
            else {
               // console.log(data)s
               albums =  JSON.parse(data)
                resolve(albums)
            }
} )
} )
}