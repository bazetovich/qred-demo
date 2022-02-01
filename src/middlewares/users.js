const { response } = require("../utils");
const { users } = require("../database");

const verifyGetUserParameters = (req, res, next) => {
  if (!req.params.userId) {
    return response.handleErrorRes(res, null, "Missing parameters", 400);
  }

  next();
};

const getUser = async (req, res, next) => {
  try {
    const user = await users.findUser(req.params.userId);

    if (!user) {
      return response.handleErrorRes(res, null, "Not found", 404);
    }

    return response.handleSuccessRes(res, user, 200);
  } catch (e) {
    return response.handleErrorRes(res, e, "failed to found", 500);
  }
};

module.exports = {
  verifyGetUserParameters,
  getUser,
};
