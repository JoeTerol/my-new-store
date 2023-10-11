const express = require('express');
const app = express()
const port = 3000;
const  apiRouter  = require('./routes/index')


app.get('/',(req, res) => {
  res.send('Hola, mi server en express')
});
app.get('/nueva-ruta',(req, res) => {
  res.send('Nueva Ruta, hola soy la segunda ruta')
});
app.get('/productos',(req, res) => {
  res.send('Nueva Ruta, hola soy la segunda ruta')
});

app.listen(port, () => {
  console.log('mi port ' + port)
})

apiRouter(app)



























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
