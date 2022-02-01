const { response } = require("../utils");
const { cards, users } = require("../database");

const verifyGetCardsParameters = (req, res, next) => {
  if (!req.query.companyId) {
    return response.handleErrorRes(
      res,
      null,
      "Missing parameter companyId",
      400
    );
  }

  next();
};

const verifyGetTransactionsParameters = (req, res, next) => {
  if (!req.params.cardId) {
    return response.handleErrorRes(res, null, "Missing parameter cardId", 400);
  }

  next();
};

const getCards = async (req, res) => {
  try {
    let result = [];
    const companyId = req.query.companyId;
    const detailsLevel = req.query.detailsLevel;
    const userHasAccess = await users.checkIfUserOwnsCompany(
      req.user.id,
      companyId
    );

    if (!userHasAccess) {
      return response.handleErrorRes(res, null, "Access denied", 403);
    }

    if (detailsLevel === "FULL") {
      result = await cards.findCardsByCompanyIdFullDetails(companyId);
    } else {
      result = await cards.findCardsByCompanyId(companyId);
    }

    return response.handleSuccessRes(res, result, 200);
  } catch (e) {
    return response.handleErrorRes(res, e, "Failed to find the cards", 500);
  }
};

const getUser = async (req, res) => {
  try {
    const user = await users.findUser(req.params.userId);

    if (!user) {
      return response.handleErrorRes(res, null, "Not found", 404);
    }

    return response.handleSuccessRes(res, user, 200);
  } catch (e) {
    return response.handleErrorRes(res, e, "Failed to find the user", 500);
  }
};

const getTransactions = async (req, res) => {
  try {
    const cardId = req.params.cardId;
    const userHasAccess = await users.checkIfUserOwnsCard(req.user.id, cardId);

    if (!userHasAccess) {
      return response.handleErrorRes(res, null, "Access denied", 403);
    }

    const result = await cards.findTransactions(cardId, {
      offset: req.query.offset,
      limit: req.query.limit,
    });

    return response.handleSuccessRes(res, result, 200);
  } catch (e) {
    return response.handleErrorRes(res, e, "Failed to find the user", 500);
  }
};

module.exports = {
  verifyGetCardsParameters,
  verifyGetTransactionsParameters,
  getUser,
  getCards,
  getTransactions,
};
