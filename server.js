/* eslint-disable no-console */
const app = require("./app");
const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
	console.log(`APP LISTENING ON PORT ${PORT}`);
});