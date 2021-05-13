// Define que estamos utilizando o sequelize
const Sequelize = require('sequelize');
 
// Obtem dados de conexão entre sequelize e banco de dados MySQL
const sequelize = require('../database/database.js');
 
// Cria tabela no BD e seus campos
const Cliente = sequelize.define("cliente", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    nome: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {
            len: [3, 100]
        }
    },
    umidade: {
        allowNull: false,
        type: Sequelize.DOUBLE(),
        validate: {
            len: [1, 999999]
        }
    },
    temperatura: {
        allowNull: false,
        type: Sequelize.DOUBLE(),
        validate: {
            len: [1, 999999]
        }
    },
    dataDaSafra: {
        allowNull: false,
        type: Sequelize.DATE()
    },
    ativo: {
        allowNull: false,
        type: Sequelize.BOOLEAN(),
        defaultValue: true
    }
});
 
module.exports = Cliente;