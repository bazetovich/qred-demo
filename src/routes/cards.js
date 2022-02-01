const router = require("express").Router();

const { verifyToken, cards } = require("../middlewares");

router.get(
  "/:cardId/transactions",
  verifyToken,
  cards.verifyGetTransactionsParameters,
  cards.getTransactions
);

router.get("/", verifyToken, cards.verifyGetCardsParameters, cards.getCards);

module.exports = router;
