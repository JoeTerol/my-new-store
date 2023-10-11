function logErrors(err, req, res, next) {
  console.error(err);
  next(err);
}

function errorhandler(err, req, res, next) {
  res.status(500).json({
    message: err.message,
    stack: err.stack,

  });
  next(err);
}
function BoomErrorhandler(err, req, res, next) {
  if (err.isBoom){
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  }else{
    next(err);
  }

}



module.exports = { logErrors, errorhandler, BoomErrorhandler }
