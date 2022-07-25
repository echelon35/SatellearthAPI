import { Dialect, Sequelize } from 'sequelize'
import "dotenv/config";

const dbName = process.env.DB_NAME as string
const dbUser = process.env.DB_USER as string
const dbHost = process.env.DB_HOST
const dbDriver = process.env.DB_DRIVER as Dialect
const dbPassword = process.env.DB_PASSWORD
const isDev = process.env.NODE_ENV === "dev"

const sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: dbDriver,
  pool: {
      max:20,
      min:0,
      acquire: 300000,
      idle: 10000
  },
  logging: isDev
})

export default sequelizeConnection