import {openDb} from '../configDB.js';

export async function createTable(){
    openDb(). then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS Paciente (id INTEGER PRIMARY KEY, nome TEXT ,numero_atendimento INTEGER , sexo TEXT , email TEXT , celular TEXT)');
    });
}

export async function selectPacientes(req, res){
    openDb(). then(db=>{
        db.all('SELECT * FROM Paciente')
          .then(pacientes=>res.json(pacientes))
  });
}

export async function selectPaciente(req, res){
    let id = req.body.id;
    openDb(). then(db => {
        db.get('SELECT * FROM Paciente WHERE id = ?',[id])
      .then(paciente=> res.json(paciente))
  });
}



export async function insertPaciente(req, res){
    let paciente = req.body
    openDb(). then(db=>{
        db.run('INSERT INTO paciente (nome,numero_atendimento, sexo, email, celular)VALUES (?,?,?,?,?)',[paciente.nome, paciente.numero_atendimento, paciente.sexo, paciente.email, paciente.celular]);
    });
    res.json({
        "statusCode":200
    })
}



export async function updatePaciente(req, res){
    let paciente = req.body
    openDb(). then(db=>{
        db.run('UPDATE Paciente SET nome=?,numero_atendimento=?, sexo=?, email=?, celular=? WHERE id=?',[paciente.nome, paciente.numero_atendimento, paciente.sexo, paciente.email, paciente.celular, paciente.id]);
    });
    res.json({
        "statusCode":200
    })
}

export async function deletePaciente(req, res){
    let id = req.body.id;
      openDb(). then(db=>{
          db.run('DELETE FROM Paciente WHERE id=?',[id])
            .then(res=>res)
    });
    res.json({
        "statusCode":200
    })
}
