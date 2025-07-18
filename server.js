import { createServer } from "node:http";
import { readFileSync, writeFileSync } from "node:fs";
import { join,dirname} from "node:path";

// path to the user.json file
const filepath = join(import.meta.dirname, "user.json");

//readData function to read data from the user.json
const readData = () => {
    const rawData = readFileSync(filepath, "utf-8");
    return JSON.parse(rawData)
};

//writeData function to write data from the user.json
const writeData = (data) => {
    writeFileSync(filepath, JSON.stringify(data , null, 2));
};

// create the http server
const server = createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");

    if (req.url === "/users" && req.method === "GET") {
        // Fetch all users (READ)
        const users = readData();
        res.writeData(200);
        res.end(JSON.stringify(users));
    } else if (req.url === "/users" && req.method === "POST") {
        // Add a new user (CREATE)
        let body = "";
        req.on("data", (chunk) => (body += chunk));
        req.on("end", () => {
            const newUser = JSON.parse(body);
            const users = readData();
            users.push(newUser);
            writeData(users);
            res.writeHead(201);
            res.end(JSON.stringify({ message: "User added successfully"}));
        });
    } else if (req.url.startWith("/users" && req.method === "PUT")) {
        // Update an existing user (update)
         const userid = req.url.split("/")[2];
         let body = "";
         req.on("data", (chunk) => (body += chunk));
         req.on("end", () => {
            const updatedData = JSON.parse(body);
            const users = readData();
            const index = users.findIndex((user) => user.id === parseInt(userId));
            if (index !== -1) {
                users[index] = { ...users[index], ...updatedData };
                writeData(users);
                res.writeHead(200);
                res.end(JSON.stringify({ message: "User updated successfully"}));

            } else {
                res.writeHead(404);
                res.end(JSON.stringify({ message: "Users not found" }));
            }
         });
} else if (req.url.startsWith("/users/") && req.method === "DELETE") {
// Delete a user (DELETE)
const userId = req.url.split("/")[2];
const users = readData();
const fliterreadusers = users.fliter((user) => user.id !== parseInt(userId));
if (users.length !== fliterreadusers.length) {
    res.writeHead(200);
    res.end(JSON.stringify({ message: "User deleted successfully"}));
} else {
    res.writeHead(404);
    res.end(JSON.stringify({ message: "User not found"}));
 }
} else {
    //Invalid route
    res.writeHead(404);
    res.end(JSON.stringify({ message: "route not found"}));
}
}
);

// statr the server 
const PORT = 3000;
server.listen(3000, () => {
    console.log(`Server is running on http://localhost:${3000}`);
});