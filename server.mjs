import {createServer} from "node:http";
import {unlink,writeFile} from 'node:fs';

// Create HHTP Server
const server = createServer((req,res)=> {
    console.log(req.url);
    if(req.url.includes('create')){
        // Create file
        writeFile('./abc.html','<h1>Learning Node.js</h1>',() => {
        // Return response
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end('<h1>File added</h1>')

        });
    }else{
        // Delete file
        unlink('./index.html',() =>{
           // Return response
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end('<h1>File deleted</h1>');
        });
    }
     
});

// Listen for incoming request
server.listen(3000, '127.0.0.1', ()=>{
    console.log('Server is running');
});

// Arrow Function
const handleRequest = () => {}