const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const clientRouter = require("./src/routes/clientRouter");
const serviceRouter = require("./src/routes/serviceRouter");

dotenv.config();

// creates the express app
const app = express();
app.use(express.json()); // this will use json format for your api

// Connects to mongodb cluster(database)
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));

// Use the routers
app.use(clientRouter);
app.use(serviceRouter);

// Start the server using express
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



// mummy ne safai ke chakkar mein router band kardiya and now its taking forever to connect. auth ka testing and lil bit of implementation is left. vo baad mein kara dunga. a little bit is still left small small features only but dw theyre max 20-30 mins ka kaam most of your work is done with crud and auth only...