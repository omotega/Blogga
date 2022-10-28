function errorResponse(res, statusCode, error) {
  const resObj = { error, statusCode };
  return res.status(statusCode).send(resObj);
}

function successResponse(res, statusCode, message, data = []) {
  const resObj = { message, statusCode, data };
  return res.status(statusCode).send(resObj);
}

function handleError(err, req) {
  console.log(
    `error message:${JSON.stringify(err.message)},
    Error caught at: ${JSON.stringify(req.path)}
    `
  );
}

module.exports = {
  errorResponse,
  successResponse,
  handleError,
};
