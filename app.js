var express = require('express')
var fs = require('fs')
var app = express()



//(classic without express) to return a web page http is required
//https://nodejs.dev/learn/introduction-to-nodejs
var http = require('http')
//const { hostname } = require('os')
var os = require('os')
const server = http.createServer((req, res) => {
    res.statusCode = 200
    //res.setHeader('Content-Type', 'text/plain')
    //res.end('Hello World\n')
    res.setHeader('Content-Type','text/html')
    res.end("<html><head></head><body><p style='font-weight:bold'>mpamies</p></body></html>")
})
var host = 'localhost' ; var port = 9000
server.listen(port, os.hostname, () => {
    console.log(`Server running at http://${host}:${port}/`)
})


app.listen(3000, () => {
    console.log("KEFTEDES on port 3000!");
})
//to run: node index.js

//http://localhost:3000/url
app.get("/url", (req, res, next) => {
    res.json(["Tny", "Lisa", "Michael", "Ginger", "Food"]);
});

//http://localhost:3000/
app.get("/", (req, res, next) => {
    //res.json(["ξφξηηδφy", "Lisa", "Michael", "Ginger", "Food"]);
    //res.send("<html><head></head><body><p>mpamies</p></body></html>");

    //send to the client console!
    //res.send("<script>console.log('mpeeee!')</script>")

    //https://nodejs.dev/learn/reading-files-with-nodejs
    res.writeHead(200, {'Content-Type': 'text/html'});

    //utf8 is critical or else bytes will be returned
    fs.readFile(__dirname + '/idx.html', 'utf8', (err, data) => {
        if (err)
            console.error(err);
        else
            res.send(data)
        //console.log(data)
    }) //works
    //res.sendFile(__dirname +  '/index.html') //works
});



