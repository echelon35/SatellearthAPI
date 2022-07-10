import Alea from './models/Alea'
import Source from './models/Source'
const isDev = process.env.NODE_ENV === 'development'

const dbInit = () => {
  Alea.sync({ alter: isDev }) //Only authorize re-creation of tables in development context
  Source.sync({ alter: isDev })
}
export default dbInit 