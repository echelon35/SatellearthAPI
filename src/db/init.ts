import Alea from './models/Alea'
import Continent from './models/Continent'
import Disaster from './models/Disaster'
import Pays from './models/Pays'
import Source from './models/Source'
import Ville from './models/Ville'
const isDev = process.env.NODE_ENV === 'dev'

const dbInit = () => {
  Alea.sync({ alter: isDev }), //Only authorize modification of tables in development context
  Source.sync({ alter: isDev }),
  Continent.sync({alter: isDev}),
  Pays.sync({alter: isDev})
}
export default dbInit 