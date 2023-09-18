const express = require('exrpress');

const router =  express.Router();

router.get('/users', (req,res) => {
  const { limit, offset } = req.query;
  if(limit && offset) {
    res.json({
      limit,
      offset
    });
  }
  res.send('No hay parametros')

})
module.exports = router
