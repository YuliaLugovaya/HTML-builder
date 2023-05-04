const fs = require("fs");
const path = require('path');
const file = path.join(__dirname, 'text.txt');

let stream = fs.createReadStream(file);

stream.on("data", function (data) {
    let result = data.toString();
    console.log(result);
});
