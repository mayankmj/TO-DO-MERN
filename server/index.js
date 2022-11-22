import express from "express"

import Connection from "./database/db.js"; // extension is must
import Routes from './routes/route.js';
import cors from 'cors'; // CROSS ORIGIN RESOURCE SHARING
import bodyParser from 'body-parser'
const app = express();

app.use(cors());


app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}))

app.use('/',Routes);

const PORT = 8000;

Connection();

app.listen(PORT, () => console.log(`successful running on PORT ${PORT}`)); // SERVER IT HAVE 2 ARGUMENTS ONE PORT NO AND SECOND CALL BACK FUNCTION i:e what u want to do after starting of server
// app.listen seups the express server
// nodemon go through to app.listen everytime a change happens