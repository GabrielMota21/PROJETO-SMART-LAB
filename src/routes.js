import { Router } from "express";

import {createTable, insertPaciente, updatePaciente, selectPaciente, selectPacientes, deletePaciente} from './controler/paciente.js'

const router = Router();

router.get('/',(req, res) =>{
    res.json({
        "statusCode":200,
        "msg": "API-RODANDO"
    })
})

router.get('/pacientes',selectPacientes);
router.get('/paciente',selectPaciente);
router.post('/paciente',insertPaciente);
router.put('/paciente',updatePaciente);
router.delete('/paciente',deletePaciente);

export default router;