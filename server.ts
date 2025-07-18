import fs from 'node:fs'
import http from "node:http"
 
const server = http.createServer((request, response) => {
    console.log(request.method)

    response.end("Hello World!")
})
//})
    
// users
//if(request.url == "/users"&& request.method == "GET") {
 ////   response.end(JSON.stringify(users))
//}

// ages
///if(request.url == "/users/ages" && request.method == "GET") {
//    response.end(JSON.stringify(ages))
///}

// user
//if(request.url == "/users"&& request.method == "GET") {
  //  response.end("Added user")
//}

    

server.listen(4000, () => {
   console.log("server is listening on port 4000")
});

// URL:https://web.facebook.com/login.php?_rdc=1&_rdr#/

// METHOD: "GET"
// METHOD: "POST"