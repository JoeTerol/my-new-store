const express = require('express');
const app = express()
const port = 3000;
const  apiRouter  = require('./routes/index')
const { logErrors, errorhandler, BoomErrorhandler  } = require('./middlewares/error.handler');

app.get('/',(req, res) => {
  res.send('Hola, mi server en express')
});
app.get('/nueva-ruta',(req, res) => {
  res.send('Nueva Ruta, hola soy la segunda ruta')
});
app.get('/productos',(req, res) => {
  res.send('Nueva Ruta, hola soy la segunda ruta')
});
apiRouter(app)

app.use(logErrors);
app.use(BoomErrorhandler);
app.use(errorhandler);


app.listen(port, () => {
  console.log('mi port ' + port)
})





























// const express = require('express');
// const app = express()
// const apiRouter = require('./routes/index')(app);





// const port = 3000;
// app.use('/api/v1', apiRouter)
// app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('hola mi server en express');

// });

// app.get('/nueva-ruta', (req, res) => {
//   res.send('hola, soy una nueva ruta ');

// });


// apiRouter(app)



// app.listen(port, ()=> {
//   // console.log('mi port' + port)
// })
