const http = require('http');
const fs = require('fs');
const path = require('path');


const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    console.log('Request for '+ req.url + ' by method '+req.method);
    
    //console.log(req.headers);
    // res.statusCode = 200; // response image
    // res.setHeader('Content-Type', 'text/html');
    // res.end('<html><body><h1>Hello, World!</h1></body></html>');
    if (req.method == 'GET'){
        var fileUrl;
        if (req.url == '/') fileUrl = '/index.html'
        else fileUrl = req.url;

        var filePath = path.resolve('./public' + fileUrl);
        const fileExt = path.extname(filePath);
        if (fileExt == '.html'){
            fs.exists(filePath, (exists) => {
                if (!exists) {
                    res.statusCode = 400;
                    res.setHeader('Content-Type', 'text/html');
                    res.end('<html><body><h1>Error 404: '+ fileUrl + 'not found</h1></body></html>');

                    return;
                }
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                fs.createReadStream(filePath).pipe(res);
            });
        }
        else{
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.end('<html><body><h1>Error 404: '+ fileUrl + 'not a HTML file</h1></body></html>');
            //return ;
        }
    }
    else{
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end('<html><body><h1>Error 404: ' + req.method + ' not supported</h1></body></html>');
    }
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
    // use back quote on the left front of the keyboard, not the normal quote
    // 这里只能用http，而不是https，因为隐私的保护机制

    
});
