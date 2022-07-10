import Alea from './models/Alea'
const isDev = process.env.NODE_ENV === 'development'

const dbInit = () => {
  Alea.sync({ alter: isDev }) //Only authorize re-creation of tables in development context
}
export default dbInit 