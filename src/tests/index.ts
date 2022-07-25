import {get as getApplication} from '../app'
import { agent as _request } from "supertest"

export const request = _request(getApplication())