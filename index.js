const express = require("express");
const mongoose = require("mongoose");
const { DB_URL } = require("./config");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());

//Routes
const postsRoutes = require("./routes/api/posts");
const doctorsRoutes = require("./routes/api/doctors");
const patientsRoutes = require("./routes/api/patients");

mongoose.connect(DB_URL)
	.then(() => {
		console.log("DB Connected");
	})
	.catch(() => {
		console.log("DB Failure");
	});

app.use("/api/posts", postsRoutes);
app.use("/api/doctors", doctorsRoutes);
app.use("/api/patients", patientsRoutes);

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
