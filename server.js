const express = require('express');
const app = express();

const public_routes = require('./router/general.js').general;
const auth_routes = require('./router/authenticated.js').authenticated;

app.use(express.json());

app.use("/", public_routes);
app.use("/", auth_routes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
