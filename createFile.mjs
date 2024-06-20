import {writeFile} from 'node:fs';


writeFile('./hello.html','<h1>Learning Node.js</h1>',() => {
    console.log('file added');
    
});

console.log('Learning');