
import express from "express";
import bodyParser from "body-parser";
import path from "path";
import http from "http";


const app = express();
const server = http.Server(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '/../public')));

app.get('*',  (req, res) => {
    res.sendFile('index.html', { root: __dirname+"/../public" });
});

export default server;

