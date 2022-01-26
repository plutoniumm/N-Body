"use strict"
// Imports
const express = require( 'express' );
const path = require( 'path' );
const fs = require( 'fs' );

// Primitives
express.static.mime.types[ 'wasm' ] = 'application/wasm';
const config = JSON.parse( fs.readFileSync( './server/config.json', 'utf-8' ) );
const PORT = 3000 || process.env.PORT;

// Basics
const app = express();

// CONFIG
app.use( express.static( config.default ) )

config.endpoints.forEach( ( endpoint ) => {
    app.use(
        endpoint.url,
        express.static( path.join( __dirname, endpoint.folder ) )
    );
} );

// ROUTES
app.get( '/', ( req, res ) => { res.send( `App running @ ${ PORT }` ); } );

app.get( '/check', ( req, res ) => { res.send( `App running @ ${ PORT }` ); } );
app.listen( PORT, () => { console.log( `App listening @ ${ PORT }` ); } );