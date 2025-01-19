# SmartLab

Este projeto foi desenvolvido como parte de um desafio técnico para criar uma versão simplificada do sistema **WorklabWeb**. O objetivo é simular um fluxo básico do sistema, permitindo o cadastro de pacientes, exames, vinculação de exames aos pacientes e geração de um relatório básico.

## Tecnologias Utilizadas

### Front-End
- **HTML5**
- **CSS3**
- **JavaScript**
- **Figma**

### Back-End
- **Node.js**
- **Express.js**

### Banco de Dados
- **SQLite**

## Funcionalidades

### Paciente
- Cadastro de pacientes com os seguintes campos:
  - Número de Atendimento (gerado automaticamente como um número aleatório)
  - Nome Completo
  - Sexo
  - Email
  - Celular

### Exame
- Cadastro de exames com os seguintes campos:
  - Código (único)
  - Descrição
  - Valor

### Regras de Negócio
1. Um paciente pode ter vários exames vinculados.
2. Não é permitido cadastrar exames com códigos duplicados.
3. O relatório lista os dados do paciente e os exames associados.

## Estrutura do Projeto

### Organização
O projeto pode ser dividido em duas partes:
1. **API (Back-End):** Gerencia as operações do sistema.
2. **Cliente (Front-End):** Interface para interação com o usuário.

### Fluxo
1. Cadastrar um paciente.
2. Cadastrar exames.
3. Vincular exames a um paciente.
4. Gerar um relatório contendo as informações do paciente e os exames associados.

## Exemplo de Banco de Dados
Adicione um exemplo de banco de dados SQLite para testes.

### Tabelas Principais
#### Paciente
|  Nome Completo | Número de Atendimento | Sexo | Email             | Celular       |
|-----------------------------------------------------------------------------------|
|  João da Silva |       123456          | M    | joao@email.com    |(11) 98765-4321|

#### Exame
| Código | Descrição    | Valor |
|--------|--------------|-------|
| HEMO   | Hemograma    | 50.00 |
| GLI    | Glicose      | 30.00 |

### Relatório Exemplo
| Paciente         | Sexo | Email           | Celular       | Exames         | Valor Total |
|------------------|------|-----------------|---------------|----------------|-------------|
| João da Silva    | M    | joao@email.com | (11) 98765-4321 | Hemograma, Glicose | 80.00       |

## Como Executar o Projeto

### Pré-requisitos
- Node.js
- Insomnia
- nodemon .\src\app.js
- figma

### Passos
1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/PROJETO-SMARTILAB.git
   ```
2. Instale as dependências:
   ```bash
   cd PROJETO-SMARTLAB
   npm install
   ```
3. Configure o banco de dados SQLite:
   - Certifique-se de que o arquivo do banco está na pasta correta.
4. Inicie o servidor:
   ```bash
   npm start
   ```
5. Acesse a aplicação no navegador:
   ```
   http://localhost:3000 OU https://localhost:3001
   ```

## Melhorias Futuras
- Autenticação de usuários.
- Validação de formulários no front-end.
- Paginação e filtros nos relatórios.
- Responsividade
- Banco de dados Login e cadastro
---

figma :

https://www.figma.com/design/tb5gpU4nhCm0FJXaQ1zYsu/Untitled?node-id=0-1&p=f&t=f3NytkfyN9xfVIkN-0
