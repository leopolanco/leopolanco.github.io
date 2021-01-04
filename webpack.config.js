const path = require('path');

//para crear el bundle de webpack
module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'build'), //dirname se utiliza para indicar el directorio del archivo, el public para especificar una carpeta en especifica, que es public
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader:'babel-loader', //para comenzar babel
            test: /\.js$/, //para que babel corra en todos los archivos que terminen en .js
            exclude: /node_module/  //para excluir la carpeta de node module
        }, {
            test: /\.s?css$/, //este regex es para targetear todos los archivos que terminen en .css y scss, el ? luego de s es para hacer la s opcional
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool:'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
};

