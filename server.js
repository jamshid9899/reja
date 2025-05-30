console.log("web serverni boshlash")
const express = require("express");
const app = express();
const http = require("http");  //core modulemiz

// 1: Kirish code 
app.use(express.static("public")); 
app.use(express.json()); 
app.use(express.urlencoded({extended: true})); 

// 3:Views code
app.set("views", "views"); 
app.set("view engine", "ejs");

// 4: Routing code
app.get("/hello", function (req, res){
 res.end(`<h1>HELLO WORLD by JAMSHID rasulov</h1>`);
});
app.get("/gift", function (req, res){
 res.end(`<h1>siz sovgalar bolimidasiz</h1>`);
});

const server = http.createServer(app);
let PORT = 3007;

// Faqatgina bevosita ishga tushirilganda serverni tingla
if (require.main === module) {
  server.listen(PORT, function () {
    console.log(`The server is running successfully on port: ${PORT}`);
  });
}

module.exports = app;
