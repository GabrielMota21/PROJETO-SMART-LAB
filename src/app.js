
import {createTable, insertPaciente} from './controler/paciente.js'

import express  from 'express';
const app = express();
app.use(express.json());

createTable();

app.get('/', function(req, res){
    res.send("olá mundo");
})

app.post('/paciente', function(req, res){
    insertPaciente(req.body)
    res.json({
        "statucCode":200
    })
});




app.listen(3000, ()=>console.log("funcionando que nem uma beleezinha"))