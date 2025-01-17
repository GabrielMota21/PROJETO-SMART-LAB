import {openDb} from '../configDB.js';

export async function createTable(){
    openDb(). then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS Paciente (id INTEGER PRIMARY KEY, nome TEXT ,numero_atendimento INTEGER , sexo TEXT , email TEXT , celular TEXT)');
    });
}
export async function insertPaciente(Paciente){
    openDb(). then(db=>{
        db.run('INSERT INTO paciente (nome,numero_atendimento, sexo, email, celular)VALUES (?,?,?,?,?)',[Paciente.nome_completo, Paciente.numero_atendimento, Paciente.sexo, Paciente.email, Paciente.celular]);
    });
}