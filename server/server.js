const express = require('express'),
      app     = express(),
      path    = require('path'),
      publicPath = path.join(__dirname, '..','public'),
      port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.get('*', (req, res) => { //para permitir que se pueda acceder a paginas individualmente
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => { 
    console.log('server is running')
})

//Este file es para permitir a express servir public