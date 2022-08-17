const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(_dirname, "/frontend/build")));

// api aka route
app.get("/names", (req, res) => {
	res.send("Blessing");
});

app.listen(5000, () => {
	console.log("server is running on port 5000");
});
