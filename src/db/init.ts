import Alea from './models/Alea'
import Continent from './models/Continent'
import Disaster from './models/Disaster'
import Pays from './models/Pays'
import Source from './models/Source'
import Ville from './models/Ville'
const isDev = process.env.NODE_ENV === 'development'

const dbInit = () => {
  Alea.sync({ alter: isDev }), //Only authorize re-creation of tables in development context
  Disaster.sync({ alter: isDev }),
  Source.sync({ alter: isDev }),
  Continent.sync({alter: isDev}),
  Pays.sync({alter: isDev}),
  Ville.sync({alter: isDev})
}
export default dbInit 