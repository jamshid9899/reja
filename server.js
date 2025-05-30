console.log("web serverni boshlash")
const express = require("express");
const app = express();
const http = require("http");  //core modulemiz

// 1: Kirish code 
app.use(express.static("public")); //bundan cssga qurgan narslarni olib kelamiz
app.use(express.json()); //kirib kelayotgan atani object holatiga ogirib beradi
app.use(express.urlencoded({extended: true})); //htmlda formrequest bor(tradion) htmldan qilingan postni kiritib beradi

// 2:Session code
// 3:Views code
app.set("views", "views"); //BssRda backda front end yaasamiz yani htmlga yboramiz
app.set("view engine", "ejs");

// 4: Routing code rooterlarga moljallangan
app.get("/hello", function (req, res){
 res.end(`<h1>HELLO WORLD by JAMSHID rasulov</h1>`);
});
app.get("/gift", function (req, res){
 res.end(`<h1>siz sovgalar bolimidasiz</h1>`);
});
const server = http.createServer(app);
let PORT = 3005;
server.listen(PORT, function () {
  console.log(`The server is running successfully on port: ${PORT}`);
}); 