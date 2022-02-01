const router = require("express").Router();

const { verifyToken, users } = require("../middlewares");

router.get(
  "/:userId",
  verifyToken,
  users.verifyGetUserParameters,
  users.getUser
);

module.exports = router;
