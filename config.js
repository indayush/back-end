require("dotenv").config();

module.exports = {
	DB_URL: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster1.2t7oqrs.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
};
