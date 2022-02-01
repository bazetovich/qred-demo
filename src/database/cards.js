// DB emulation

const findCardsByCompanyId = async (_companyId) => [
  {
    id: "id",
    availableBalance: 100,
    totalBalance: 400,
    currency: "SEK",
  },
];

const findCardsByCompanyIdFullDetails = async (_companyId) => [
  {
    id: "id",
    availableBalance: 100,
    totalBalance: 400,
    currency: "SEK",
    invoiceDue: {
      id: "id",
    },
  },
];

const findTransactions = async (_cardId, _pagination) => ({
  items: [
    {
      id: "id",
      date: "date",
      description: "description",
    },
  ],
  limit: 3,
  offset: 0,
  total: 54,
});

module.exports = {
  findCardsByCompanyIdFullDetails,
  findCardsByCompanyId,
  findTransactions,
};
