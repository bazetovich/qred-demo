function handleErrorRes(res, err, errMsg = "error occured", statusCode = 500) {
  console.error("ERROR:", err);
  return res.status(statusCode).json({ error: true, error: errMsg });
}

function handleSuccessRes(res, data, statusCode = 200) {
  return res.status(statusCode).json({ error: false, data });
}

module.exports = {
  handleErrorRes,
  handleSuccessRes,
};
