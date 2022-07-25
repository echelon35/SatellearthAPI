import {get as getApplication} from './src/app'
import dbInit from './src/db/init'
import "dotenv/config";

dbInit();

const port = process.env.LISTENING_PORT;

const app = getApplication()

try {
    if (process.env.NODE_ENV !== 'test') {
        app.listen(port);
    }
} catch (error: any) {
    console.log(`Error occurred: ${error.message}`)
}