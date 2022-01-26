const path = require( 'path' );

module.exports = {
    mode: 'development',
    entry: './js/index.js',
    output: {
        path: path.resolve( __dirname, 'bundle' ),
        filename: 'bundle.js',
    },
    experiments: {
        asyncWebAssembly: true,
        syncWebAssembly: true
    }
};