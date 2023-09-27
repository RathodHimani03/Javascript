// // const userName = 'Max';

// // console.log(`Hi ${userName}!`);

// const fs = require('fs')


// fs.readFile('use-data.txt',(err,data) =>{
//     if(err){
//         console.log(err);
//         return
//     }
    
//         console.log(data.toString())
    
// })
// fs.writeFile('use-data.txt','username=Max',err =>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('wrote to file')
//     }
// })


const http = require('http');

//create serve method reqire one important argument 
//request listener which is a function in the end trigger for every incomin g request
//request listner function take  arguments  which are passed in automatically by node.js (request object and response object)
//this 2 objects helps to send and read data from incoming server     


const server = http.createServer((request,response)=>{

    let body = [];
    request.on('data',(chunk) => {
        body.push(chunk)
    });

    request.on('end',() => {
        body = Buffer.concat(body).toString();
        let userName = "Unknown User";
        if(body){
            
         userName = body.split('=')[1]
        }
        response.setHeader('Content-Type','text/html');
    
        response.write(`<h1>Hi ${userName} </h1><form method="POST" action="/"><input name="username" type="text"><button>send</button></form>`);
        response.end();//basicall tells node.js that we're done adding to the response
    
    })
})
     
server.listen(3000)