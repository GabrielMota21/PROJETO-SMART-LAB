const express = require('express');
const mysql = require('mysql2');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = 3306;

app.use(express.json());

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err.message);
        return;
    }
    console.log('Connected to MySQL database.');

    // Create tables if they don't exist
    const createPatientTable = `CREATE TABLE IF NOT EXISTS Patient (
        id INT AUTO_INCREMENT PRIMARY KEY,
        numero_atendimento VARCHAR(36) UNIQUE NOT NULL,
        nome_completo VARCHAR(100) NOT NULL,
        sexo CHAR(1) NOT NULL,
        email VARCHAR(100),
        celular VARCHAR(15)
    )`;

    const createExamTable = `CREATE TABLE IF NOT EXISTS Exam (
        id INT AUTO_INCREMENT PRIMARY KEY,
        codigo VARCHAR(10) UNIQUE NOT NULL,
        descricao VARCHAR(100) NOT NULL,
        valor DECIMAL(10, 2) NOT NULL,
        patient_id INT,
        FOREIGN KEY (patient_id) REFERENCES Patient (id)
    )`;

    db.query(createPatientTable, (err) => {
        if (err) console.error('Error creating Patient table:', err.message);
    });

    db.query(createExamTable, (err) => {
        if (err) console.error('Error creating Exam table:', err.message);
    });
});
