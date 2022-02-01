// DB emulation

const findUser = async () => ({
  companies: [
    {
      name: "Company AB",
      id: "id",
    },
  ],
});

const checkIfUserOwnsCompany = async (_userId, _companyId) => true;

const checkIfUserOwnsCard = async (_userId, _cardId) => true;

module.exports = {
  findUser,
  checkIfUserOwnsCompany,
  checkIfUserOwnsCard,
};
