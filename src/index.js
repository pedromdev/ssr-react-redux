import express from 'express';
import render from './helpers/render'
import createStore from './helpers/createStore'
const app = express();
app.use(express.static('public'))

app.get("*",(req,res) => {
    res.send(render(req,createStore));
});

app.listen(3000,() => {
    console.log("porta 3000")
});

