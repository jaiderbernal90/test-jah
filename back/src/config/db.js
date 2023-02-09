import { Sequelize } from 'sequelize';

/* Creating a connection to the database. */
const dbName = 'test_jah';
const dbUser = 'root';
const dbHost = '127.0.0.1';
const dbDriver = 'mysql';
const dbPassword = '12345';

const sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: dbDriver
})

sequelizeConnection.authenticate()

export default sequelizeConnection;
