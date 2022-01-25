"use strict"
// Imports
import express from 'express';
import path from 'path';
import fs from 'fs';

const config = JSON.parse( fs.readFileSync( './server/config.json', 'utf-8' ) );
const __dirname = path.resolve();

// Primitives
const PORT = 3000 || process.env.PORT;
const default_route = './';

// Basics
const app = express();

// CONFIG
app.use( '/', express.static( path.join( __dirname, default_route ) ) );

config.endpoints.forEach( ( endpoint ) => {
    app.use( endpoint.url, express.static( path.join( __dirname, endpoint.folder ) ) );
} );

// ROUTES
app.get( '/', ( req, res ) => {
    res.send( `App running @ ${ PORT }` );
} );

app.listen( PORT, () => {
    console.log( `App listening @ ${ PORT }` );
} );